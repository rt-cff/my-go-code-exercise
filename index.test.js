const assert = require("assert");
const transform = require("./index").default;

describe("Test", function () {
  it("should return true", function () {
    assert.equal(transform(), true);
  });
});
