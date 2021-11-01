const {eqArrays} = require('./eqArrays');

const assertArraysEqual =  (arr1, arr2, eqArray) => {
  if (eqArray(arr1, arr2)) {
    return console.log(`✅ Passed: ${arr1} === ${arr2}`);
  }
  return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
};


module.exports = {assertArraysEqual, eqArrays};