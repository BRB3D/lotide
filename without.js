const assertArraysEqual =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌ Failed: ${[arr1]} !== ${[arr2]}`);
    }
  }
  return console.log(`✅ Passed: ${[arr1]} === ${[arr2]}`);
};

const without =  (arr1, arr2) => {
  let final = [...arr1];
  for (let i = 0; i < arr2.length; i++) {
    while (final.indexOf(arr2[i]) > -1) {
      final.splice(final.indexOf(arr2[i]),1);
    }
  }
  return final;
};
let words = [1, 2, 3];
let words2 = ["1", "2", "3"];
let words3 = ['1','a',3];
console.log(without(words , [1]));
assertArraysEqual(words , [1, 2, 3]);
console.log(without(words2 , [1, 2, "3"]));
assertArraysEqual(words2 , ["1", "2", "3"]);
console.log(without(words3, ['a']));