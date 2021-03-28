const _isPlainObject = require("lodash.isplainobject");
const {
  ERROR_NOT_PLAIN_OBJECT,
  ERROR_MORE_THAN_ONE_PROPERTY,
} = require("./errors-code");

//Getting (first) Property name from object
const getKey = (val) => {
  if (_isPlainObject(val)) {
    const [key, ...keys] = Object.keys(val);

    if (keys.length > 0) {
      throw ERROR_MORE_THAN_ONE_PROPERTY;
    }

    return key;
  } else {
    throw ERROR_NOT_PLAIN_OBJECT;
  }
};

//reversing the property name of an obejct recursively
const parse = (val, res) => {
  if (_isPlainObject(val)) {
    const key = getKey(val);

    return parse(val[key], {
      [key]: res,
    });
  } else {
    return {
      [val]: res,
    };
  }
};

exports.default = (value) => {
  const key = getKey(value);

  return parse(value[key], key);
};
