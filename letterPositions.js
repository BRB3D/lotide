const eqArrays =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅ Passed: ${arr1} === ${arr2}`);
};





const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ' ') {
      null;
    }  else if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};


assertArraysEqual(eqArrays(letterPositions("hello").e, [1]), true);
assertArraysEqual(eqArrays(letterPositions("hello").h, [0]), true);
assertArraysEqual(eqArrays(letterPositions("hello").l, [2,3]), true);
assertArraysEqual(eqArrays(letterPositions("hello").o, [4]), true);
