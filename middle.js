
const middle = (arr) => {
  if (arr.length <= 2) return [];
  let middle = arr.length / 2;
  if (middle % 1 === 0) {
    return [arr[middle - 1], arr[middle]];
  }
  return [arr[Math.floor(middle)]];
};
 
module.exports = middle;