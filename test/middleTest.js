const {assertArraysEqual, eqArrays} = require('../assertArraysEqual');

const middle = require('../middle');

assertArraysEqual(middle([0,1,2,3,4,5,6]), [3], eqArrays);
assertArraysEqual(middle([0,1,2,3,4,5]), [2,3], eqArrays);
assertArraysEqual(middle([0,1]), [], eqArrays);
assertArraysEqual(middle([0,1,2]), [1], eqArrays);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4], eqArrays);
