const {assertArraysEqual, eqArrays} = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;



describe('Returns middle of a word', function() {
  it('Returns [3] from [0,1,2,3,4,5,6] becasue odd numbers return one middle number', function() {

  assert.deepEqual(middle([0,1,2,3,4,5,6]), [3]);
  });
  it('Returns [2,3] from [0,1,2,3,4,5] becasue even numbers return two numbers', function() {

  assert.deepEqual(middle([0,1,2,3,4,5]), [2,3]);
  });

  it('Returns [] from [0,1] arrays smaller than two values return an empty array', function() {

  assert.deepEqual(middle([0,1]), []);
  });

  it('Returns [1] from [0,1,2] becasue odd numbers return one middle number', function() {

    assert.deepEqual(middle([0,1,2]), [1]);
    });

});