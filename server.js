const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const peaks = require('./assets/peaks.json');
const app = express();

app.use(express.json());
app.use(cors());

app.locals.title = "Fourteeners API";
app.locals.peaks = peaks;

app.set("port", process.env.PORT || 3000);
app.use(express.static("public"));
app.use(express.static("assets"));

app.get("/api/v1/peaks", (request, response) => {
  response.status(200).json(app.locals.peaks);
});

app.get("/api/v1/peaks/:id", (request, response) => {
  const { id } = request.params;
  const match = app.locals.peaks.find((peak) => peak.id == id);

  if (!match)
    return response
      .status(404)
      .json({ message: `No peak found with an id of ${id}` });

  return response.status(200).json(match);
});

app.post("/api/v1/peaks", (request, response) => {
  const newPeak = request.body;

  for (let requiredParameter of ["id", "name", "elevation", "rank", "range"]) {
    if (!newPeak[requiredParameter])
      return response.status(422).json({
        message: `You are missing a required parameter: ${requiredParameter}`,
      });
  }

  app.locals.peaks = [...app.locals.peaks, newPeak];

  return response.status(201).json(newPeak);
});

app.delete("/api/v1/peaks/:id", (request, response) => {
  const { id } = request.params;
  const match = app.locals.peaks.find((peak) => peak.id == id);

  if (!match)
    return response
      .status(404)
      .json({ message: `No peak found with an id of ${id}` });

  const filteredPeaks = app.locals.peaks.filter((peak) => peak.id != id);

  app.locals.peaks = filteredPeaks;

  return response.sendStatus(204);
});

app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is now running on port ${app.get("port")}!`);
});
