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
  const currentPeak = peaks.find(peak => peak.id == id);

  if (!currentPeak) {
    return response
      .status(404)
      .json({ message: `No peak found with id ${id} to update` });
  } else if (currentPeak && !updatedPeak.routes) {
    let {name, elevation, rank, range, forest, grizzlyBears, marmots, jerryLevel, numberOfRoutes} = updatedPeak;
    name ? currentPeak.name = name : false;
    forest ? currentPeak.forest = forest : false;
    elevation ? currentPeak.elevation = elevation : false;
    rank ? currentPeak.rank = rank : false;
    range ? currentPeak.range = range : false;
    grizzlyBears? currentPeak.grizzlyBears = grizzlyBears : false;
    marmots ? currentPeak.marmots = marmots : false;
    jerryLevel ? currentPeak.jerryLevel = jerryLevel : false;
    numberOfRoutes ? currentPeak.numberOfRoutes = numberOfRoutes : false;
    return response.status(200).json(currentPeak);
  } else if (currentPeak && updatedPeak.routes) {
    let { routes } = updatedPeak;
    let routeName = Object.keys(routes)[0];
    let routeDetails = Object.values(routes)[0];
    if (routeDetails) {
      currentPeak.routes[routeName] = routeDetails;
    }
    return response.status(200).json(currentPeak);
  }
});

module.exports = router;