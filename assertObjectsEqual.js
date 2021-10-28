const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (Object.keys(object1).length !== Object.keys(object2).length) {return console.log(`❌ Failed: ${inspect(object1)} !== ${inspect(object2)}`)};
  for(let key in object1) {
    if (object1[key] === object2[key] && object1[key] && object2[key]) {
      null;
    } else if (Array.isArray(object1[key]) && object1[key].length === object2[key].length ){
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return console.log(`❌ Failed: ${inspect(object1)} !== ${inspect(object2)}`);
        }
      }
      null;
    } else {
      return console.log(`❌ Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    }
  }
  return console.log(`✅ Passed: ${inspect(object1)} === ${inspect(object2)}`); 
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false