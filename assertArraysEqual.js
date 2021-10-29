
const assertArraysEqual =  (arr1, arr2, eqArray) => {
  if (eqArray(arr1, arr2)) {
    return console.log(`✅ Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
};

const eqArrays =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual([1, 2, 3], [3, 2, 1], eqArrays);
assertArraysEqual([1, 2, 3], [1, 2, 3], eqArrays);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], eqArrays);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], eqArrays);