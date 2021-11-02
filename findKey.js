
const findKey = (obj, match) => {
  for (let key in obj) {
    if (match(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;