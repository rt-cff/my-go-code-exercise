const getKey = (val) => {
  const [key] = Object.keys(val);

  return key;
};

const parse = (val, res) => {
  if (typeof val === "object") {
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
