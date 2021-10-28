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

const middle = (arr) => {
  if (arr.length <= 2) return [];
  let middle = arr.length / 2;
  if (middle % 1 === 0) {
    return [arr[middle - 1], arr[middle]];
  } 
  return [arr[Math.floor(middle)]];
};
 




/* //Implemented a multiple functions approach that is extremely convoluted but it works.
//checks if the functio is valid.
let verification = (arr) => {
  return arr.length > 2 ? arr : [];
}
//gives the index of the middle of the array.
let division = (arrayLeng) => {
  let division = (arrayLeng.length)/ 2;

  return [division, arrayLeng];
};
//we will now do an if statement function that return either one index or two depending on the previous result.

let evenOrOdd = (numAndArray) => {
  if (numAndArray[0] % 1 === 0) {
    return ['even',numAndArray[0], numAndArray[1]];
  }
return ['odd', Math.floor(numAndArray[0]), numAndArray[1]];
};

const middle = (evenOrOdd) => {
if (evenOrOdd[1] === 0) {
  return [];
} else if (evenOrOdd[0] === 'even') {
  return  [evenOrOdd[2][evenOrOdd[1] -1],evenOrOdd[2][evenOrOdd[1]] ];
} else if (evenOrOdd[0] === 'odd') {
  return  [evenOrOdd[2][evenOrOdd[1]]];
}
}; */

assertArraysEqual([eqArrays(middle([0,1,2,3,4,5,6]), [3])], [true]);
assertArraysEqual([eqArrays(middle([0,1,2,3,4,5]), [2,3])], [true]);
assertArraysEqual([eqArrays(middle([0,1]), [])], [true]);
assertArraysEqual([eqArrays(middle([0,1,2]), [1])], [true]);
assertArraysEqual([eqArrays(middle([1, 2, 3, 4, 5, 6]), [3,4])], [true]);


/* console.log(middle(evenOrOdd(division(verification([0,1,2,3,4,5]))))); */
