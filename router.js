const { Router } = require("express");
const { save } = require("./save_json");

let peaks = require("./assets/peaks.json");

const router = new Router();

router.get("/", (req, res) => {
  res.status(200).json(peaks)
});

router.get("/:id", (request, response) => {
  const { id } = request.params;
  const peak = peaks.find((peak) => peak.id == id);

  if (!peak)
    return response
      .status(404)
      .json({ message: `No peak found with an id of ${id}` });

  return response.status(200).json(peak);
});

router.post("/", (request, response) => {
  const newPeak = request.body;
  const foundDuplicate = peaks.find((peak) => peak.id == newPeak.id);
  if (foundDuplicate) {
    return response
      .status(400)
      .json({ message: `There is already a peak with this id: ${newPeak.id}` });
  } else {
    for (let requiredParameter of ["id", "name", "elevation", "rank", "range"]) {
      if (!newPeak[requiredParameter])
        return response
        .status(422)
        .json({message: `You are missing a required parameter: ${requiredParameter}`});
    }
    peaks = [...peaks, newPeak];
    return response.status(201).json(newPeak);
  }
});

router.delete("/:id", (request, response) => {
  const { id } = request.params;
  const peak = peaks.find((peak) => peak.id == id);

  if (!peak)
    return response
      .status(404)
      .json({ message: `No peak found with id ${id}` });

  const filteredPeaks = peaks.filter((peak) => peak.id != id);
  peaks = filteredPeaks;

  return response.sendStatus(204);
});

router.patch("/:id", (request, response) => {
  const updatedPeak = request.body;
  const { id } = request.params;
  const peak = peaks.find((peak) => peak.id == id);

  if (!peak) {
    return response
      .status(404)
      .json({ message: `No peak found with id ${id} to update` });
  } else if (peak && !updatedPeak.routes) {
    let {name, elevation, rank, range, forest, grizzlyBears, marmots, jerryLevel, numberOfRoutes} = updatedPeak;
    peak.name = name;
    peak.forest = forest;
    peak.elevation = elevation;
    peak.rank = rank;
    peak.range = range;
    peak.grizzlyBears = grizzlyBears;
    peak.marmots = marmots;
    peak.jerryLevel = jerryLevel;
    peak.numberOfRoutes = numberOfRoutes;
    return response.status(200).json(peak);
  } else if (peak && updatedPeak.routes) {
    let { routes } = updatedPeak;
    let routeName = Object.keys(routes)[0];
    let routeDetails = Object.values(routes)[0];
    if (routeDetails) {
      peak.routes[routeName] = routeDetails;
    }
    return response.status(200).json(peak);
  }
});

module.exports = router;