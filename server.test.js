const express = require("express");
const routes = require("./router");
const { save } = require("./save_json");
const request = require("supertest");
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";

jest.mock("./save_json", () => ({
  save: jest.fn(),
}));

jest.mock("./assets/peaks.json", () => [
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
  {
    id: 11,
    name: "Torrey's Peak",
    elevation: 14267,
    rank: 11,
    range: "Front",
    forest: "Arapaho",
    grizzlyBears: false,
    marmots: true,
    jerryLevel: "critical",
    numberOfRoutes: 6,
    routes: {
      southSlopes: {
        mileage: 8,
        gain: 3000,
        difficulty: "class 2",
        exposure: 1,
      },
      kelsoRidge: {
        mileage: 6.75,
        gain: 3100,
        difficulty: "class 3",
        exposure: 4,
      },
      deadDogCouloir: {
        mileage: 6.5,
        gain: 3000,
        difficulty: "class 3",
        exposure: 3,
      },
      tuningFork: {
        mileage: 10.5,
        gain: 4500,
        difficulty: "class 2+",
        exposure: 2,
      },
      emperorCouloir: {
        mileage: 9.5,
        gain: 4500,
        difficulty: "class 3",
        exposure: 3,
      },
      westRidge: {
        mileage: 10,
        gain: 5500,
        difficulty: "class 2",
        exposure: 2,
      },
    },
  }
]);

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/peaks/", routes);

describe("Server", () => {

  test("should return a 200 status", async () => {
      const res = await request(app).get("/api/v1/peaks");
      expect(res.status).toBe(200);
    });

  test("GET api/v1/peaks - success", async () => {
    const { body, status } = await request(app).get("/api/v1/peaks");
    expect(body).toHaveLength(2);
    expect(typeof body).toBe("object");
    expect(status).toBe(200);
  });

  test("GET api/v1/peaks/15 - success", async () => {
    const { body, status } = await request(app).get("/api/v1/peaks/15");
    expect(body.name).toEqual("Long's Peak");
    expect(body.range).toEqual("Front");
    expect(body.routes.keyhole.difficulty).toEqual("class 3");
    expect(status).toEqual(200)
  });

  test("GET api/va/peaks/-1 - fail", async () => {
    const invalidID = -1;
    const { body, status } = await request(app).get(`/api/v1/peaks/${invalidID}`)
    expect(status).toBe(404);
    expect(body.message).toEqual("No peak found with an id of -1");
  });

  test("POST api/v1/peaks - success", async () => {
    let newPeak = {
        id: 54,
        name: "My New Fourteener",
        elevation: 14001,
        rank: 54,
        range: "Sawatch",
      };
    const { body, status } = await request(app).post("/api/v1/peaks").send(newPeak);
    expect(body.name).toEqual("My New Fourteener");
    expect(typeof body).toBe("object");
    expect(status).toBe(201);
  });

  test("POST api/v1/peaks - no id fail", async () => {
    const newPeak = { fake: "fake" };
    const { body, status } = await request(app).post("/api/v1/peaks").send(newPeak)
    expect(status).toBe(422);
    expect(body.message).toEqual(`You are missing a required parameter: id`);
  });

  test("POST api/v1/peaks - req'd parameter fail", async () => {
    const newPeak = {
      id: 75,
      name: "New Peak",
      elevation: 14001,
      rank: 75
    };
    const { body, status } = await request(app).post("/api/v1/peaks").send(newPeak);
    expect(status).toBe(422);
    expect(body.message).toEqual(`You are missing a required parameter: range`);
  });

  test("POST api/v1/peaks - duplicate peak id fail", async () => {
    const newPeak = {
      id: 15,
      name: "Long's Peak",
      elevation: 14255,
      rank: 15
    };
    const { body, status } = await request(app).post("/api/v1/peaks").send(newPeak);
    expect(status).toBe(400);
    expect(body.message).toEqual(`There is already a peak with this id: 15`);
  });

  test("DELETE api/v1/peaks/15 - success", async () => {
    const { body, status } = await request(app).delete("/api/v1/peaks/15");
    expect(status).toEqual(204);
  });

  test("DELETE api/v1/peaks/1", async () => {
    const id = 10000000;
    const { body, status} = await request(app).delete(`/api/v1/peaks/${id}`)
    expect(status).toBe(404);
    expect(body.message).toEqual(`No peak found with id ${id}`);
  });

});
