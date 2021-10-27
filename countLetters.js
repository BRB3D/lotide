const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

const result1 = countLetters('lighthouse in the house');
console.log(result1);
assertEqual(result1['l'], 1);
assertEqual(result1['i'], 2);
assertEqual(result1['g'], 1);
assertEqual(result1['h'], 4);
assertEqual(result1['t'], 2);
assertEqual(result1['o'], 2);
assertEqual(result1['u'], 2);
assertEqual(result1['s'], 2);
assertEqual(result1['e'], 3);
assertEqual(result1['n'], 1);
const result2 = countLetters('LHl');

assertEqual(result2['L'], 1);
assertEqual(result2['H'], 1);
assertEqual(result2['l'], 1);