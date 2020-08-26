const dronByFly = require("../../code-wars/7-kyu/drone-by-fly");

describe('Drone by fly, 7 kyu', () => {
  test("Drone by fly", () => {
    expect(dronByFly("oooo", "==T")).toEqual("xxxo");
  });

  test("Drone by fly when lamps are null", () => {
    expect(dronByFly(null, "==T")).toEqual("");
  });

  test("Drone by fly when drones are null", () => {
    expect(dronByFly("oooo", null)).toEqual("");
  });
});
