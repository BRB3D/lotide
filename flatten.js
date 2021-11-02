const flatten =  (items) => {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      result = result.concat(flatten(items[i]));
    } else {
    result =  result.concat(items[i]);
    }

  }
  return result;
};


module.exports = flatten;