const {assertArraysEqual, eqArrays} = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3], eqArrays);//true
assertArraysEqual([1, 2, 3], [3, 2, 1], eqArrays);//false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"], eqArrays);//true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3], eqArrays);//false