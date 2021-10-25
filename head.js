const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
};
const head = arr => arr.length > 0 ? arr[0] : undefined;
// Test cases for Head.js
/* assertEqual(head([5,6,7]), 2);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helo");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); */
