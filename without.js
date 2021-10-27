const assertArraysEqual =  (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`❌ Failed: ${[arr1]} !== ${[arr2]}`);
    }
  }
  return console.log(`✅ Passed: ${[arr1]} === ${[arr2]}`);
};

const without =  (arr1, arr2) => {
  /* let final = [...arr1]; */
  let final = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      final.push(arr1[i]);
    }
    /* while (final.indexOf(arr2[i]) > -1) {
      final.splice(final.indexOf(arr2[i]),1);
    } */
  }
  return final;
};
let words = [1, 2, 3];
let words2 = ["1", "2", "3"];
let words3 = ['1','a',3];
assertArraysEqual(without(words , [1]), [2,3]);
assertArraysEqual(words , [1, 2, 3]);
assertArraysEqual(without(words2 , [1, 2, "3"]),['1', '2']);
assertArraysEqual(words2 , ["1", "2", "3"]);
assertArraysEqual(without(words3, ['a']), ['1', 3]);