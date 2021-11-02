const takeUntil = (array, until) => {
  let result = [];
  for (let item of array) {
    if (until(item)) {
      return result;
    }
    result.push(item);
  }
};



module.exports = takeUntil;



