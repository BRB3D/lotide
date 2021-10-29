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

const takeUntil = (array, until) => {
  let result = [];
  for (let item of array) {
    if (until(item)) {
      return result;
    }
    result.push(item);
  }
};




//Expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], eqArrays);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], eqArrays);

console.log('---');

const data3 = [1,2,3,'a', 'null', 5, 6];
const result3 = takeUntil(data3, x => x === 'null');
assertArraysEqual(result3, [1,2,3,'a'], eqArrays);



//Expected Output



