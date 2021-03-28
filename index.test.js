const assert = require("assert");
const transform = require("./index").default;
const {
  ERROR_NOT_PLAIN_OBJECT,
  ERROR_MORE_THAN_ONE_PROPERTY,
} = require("./errors-code");

const DEFAULT_INPUT = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
};

const STRING_INPUT = "NOT PLAIN OBEJCT";

const MORE_THAN_ONE_PROPERTY_INPUT = {
  hired: {
    be: {
      to: {
        deserve: "I",
      },
    },
  },
  errors: {
    should: {
      be: "thrown",
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

  it("should throw error if input is not plain object (string)", function () {
    assert.throws(() => transform(STRING_INPUT), ERROR_NOT_PLAIN_OBJECT);
  });

  it("should throw error if input has more than one property", function () {
    assert.throws(
      () => transform(MORE_THAN_ONE_PROPERTY_INPUT),
      ERROR_MORE_THAN_ONE_PROPERTY
    );
  });
});
