const assert = require("assert");
const transform = require("./index").default;

const DEFAULT_INPUT = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

const EXPECTED_OUTPUT = {
  I: {
    deserve: {
      to: {
        be: "hired",
      },
    },
  },
};

describe("With default input", function () {
  it("should return expected output", function () {
    assert.notStrictEqual(transform(DEFAULT_INPUT), EXPECTED_OUTPUT);
  });
});
