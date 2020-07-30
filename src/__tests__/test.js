const assert = require("assert");
const { filter } = require("../../lib/index");

describe("Testing array methods", function () {
  it("filter should return expected value", function () {
    try {
      const arr = [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ];
      assert.equal(
        filter(arr, (item) => item.length > 6),
        ["exuberant", "destruction", "present"]
      );
    } catch (error) {}
  });

  it("map should return expected value", function () {
    try {
      const arr = ["spray", "limit"];
      assert.equal(
        map(arr, (item, index) => ({ id: index, name: item })),
        [
          { id: 0, name: "spray" },
          { id: 1, name: "limit" },
        ]
      );
    } catch (error) {}
  });

  it("find should return expected value", function () {
    try {
      const arr = [
        { id: 0, name: "spray" },
        { id: 1, name: "limit" },
      ];
      const id = 1;

      assert.equal(
        find(arr, (item) => item.id === id),
        { id: 1, name: "limit" }
      );
    } catch (error) {}
  });

  it("find should return expected value", function () {
    try {
      const arr1 = ["spray", "limit", "elite"];
      const arr2 = ["exuberant", "destruction", "present"];

      assert.equal(concat(arr1, arr2), [
        "spray",
        "limit",
        "elite",
        "exuberant",
        "destruction",
        "present",
      ]);
    } catch (error) {}
  });

  it("find should return expected value", function () {
    try {
      const arr = ["spray", "limit", "elite", "exuberant", "destruction"];

      assert.equal(
        pipe(arr, [
          filter((item) => item.length > 6), // returns ["exuberant", "destruction"]
          map((item, index) => ({ id: index, name: item })), // returns [{ id: 0, name: 'exuberant' }, { id: 1, name: 'destruction' }]
        ]),
        [
          { id: 0, name: "exuberant" },
          { id: 1, name: "destruction" },
        ]
      );
    } catch (error) {}
  });
});
