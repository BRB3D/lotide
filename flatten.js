const assertArraysEqual =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌ Failed: ${arr1} !== ${arr2}`);
    }
  }
  return console.log(`✅ Passed: ${arr1} === ${arr2}`);
};

const flatten =  (items) => {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {
      result = result.concat(flatten(items[i]));
    } else {
    result =  result.concat(items[i]);
    }

  }
  return result;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6,[7,8],9]]), [1,2,3,4,5,6,7,8,9]);