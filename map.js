const assertArraysEqual =  (arr1, arr2, eqArray) => {
    if (eqArray(arr1, arr2)) {
      return console.log(`✅ Passed: ${arr1} === ${arr2}`);
    }
  return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
}

const eqArrays =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];


// Our function should return the same answer. 
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word[word.length - 1]);

//test cases
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ], eqArrays);
assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ], eqArrays);
assertArraysEqual(results3, [ 'd', 'l', 'l', 'r', 'm' ], eqArrays);
