
const eqArrays =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅ Passed: ${arr1} === ${arr2}`);
};

eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);