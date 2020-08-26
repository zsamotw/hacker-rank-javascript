const overTheRoad = require("../../code-wars/7-kyu/over-the-road");

describe('Over the road', () => {
  test("Over the road case 1", () => {
    expect(overTheRoad(1,3)).toEqual(6);
    expect(overTheRoad(3,3)).toEqual(4);
    expect(overTheRoad(2,3)).toEqual(5);
    expect(overTheRoad(3,5)).toEqual(8);
  });

  test("Over the roads when address is null", () => {
    expect(overTheRoad(null, 3)).toEqual(undefined);
  });

  test("Over the roads when number is null", () => {
    expect(overTheRoad(1, null)).toEqual(undefined);
  });
});

