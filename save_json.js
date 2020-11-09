const fs = require("fs");
const path = require("path");

const save = (peaks) => {
  fs.writeFile(
    path.join(__dirname, ".", "peaks.json"),
    JSON.stringify(peaks, null, 2),
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
};

module.exports = { save };