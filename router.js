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

module.exports = router;