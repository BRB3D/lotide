const { count } = require("console");

const countLetters = (str) => {
  let result = {};
  let string = str.split(' ').join('');
  for (let letter of string) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters; 