const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};
const tail = arr => arr.length > 0 ? arr.slice(1) : []; 

const result = tail(["Hello", "Lighthouse", 'Labs']);
assertEqual(result.join(), ["Lighthouse", "Labs"].join());
/* // Test Case: Check the original array 
const result = tail(["Hello", "Lighthouse", 3]);
assertEqual(result.join(), ["Lighthouse", "Labs"].join());
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements! 

const result = tail([]);
assertEqual(result.join(), ["Lighthouse", "Labs"].join());
*/