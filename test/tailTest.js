const {assertEqual, tail} = require('../tail');


const result2 = tail(["Hello", "Lighthouse", 'Labs']);
assertEqual(result2.join(), ["Lighthouse", "Labs"].join());

const result = tail(["Hello", "Lighthouse", 3]);
assertEqual(result.join(), ["Lighthouse", "Labs"].join());
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result3 = tail([]);
assertEqual(result3.join(), ["Lighthouse", "Labs"].join());