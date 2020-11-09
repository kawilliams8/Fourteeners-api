const express = require("express");
const routes = require("./router");
const { save } = require("./save_json");
const request = require("supertest");
const bodyParser = require("body-parser");

jest.mock("./save_json", () => ({
  save: jest.fn(),
}));

jest.mock("./assets/peaks.json", () => [
  {
    "id": 15,
    "name": "Long's Peak",
    "elevation": 14255,
    "rank": 15,
    "range": "Front",
    "forest": "Rocky Mountain National Park",
    "grizzlyBears": false,
    "marmots": true,
    "jerryLevel": "extreme",
    "numberOfRoutes": 3,
    "routes": {
      "keyhole": {
        "mileage": 14.5,
        "gain": 5100,
        "difficulty": "class 3",
        "exposure": 4
      },
      "loft": {
        "mileage": 13,
        "gain": 5300,
        "difficulty": "class 3",
        "exposure": 4
      },
      "keplingersCouloir": {
        "mileage": 16,
        "gain": 5900,
        "difficulty": "class 3",
        "exposure": 4
      }
    }
  }
]);

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/peaks/", routes);

describe("server route testing", () => {

  test("GET api/v1/peaks - success", async () => {
    const { body } = await request(app).get("/api/v1/peaks");
    expect(body).toEqual([
      {
        id: 15,
        name: "Long's Peak",
        elevation: 14255,
        rank: 15,
        range: "Front",
        forest: "Rocky Mountain National Park",
        grizzlyBears: false,
        marmots: true,
        jerryLevel: "extreme",
        numberOfRoutes: 3,
        routes: {
          keyhole: {
            mileage: 14.5,
            gain: 5100,
            difficulty: "class 3",
            exposure: 4,
          },
          loft: {
            mileage: 13,
            gain: 5300,
            difficulty: "class 3",
            exposure: 4,
          },
          keplingersCouloir: {
            mileage: 16,
            gain: 5900,
            difficulty: "class 3",
            exposure: 4,
          },
        },
      },
    ]);
  });

});
