

//Takes two objects and return ture or false based on a perfect match
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {return false};
  for(let key in object1) {
    if (object1[key] === object2[key] && object1[key] && object2[key]) {
      null;
    } else if (Array.isArray(object1[key]) && object1[key].length === object2[key].length ){
      for (let i = 0; i < object1[key].length; i++) {
        if (object1[key][i] !== object2[key][i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
  return true; 
};


module.exports = eqObjects; 