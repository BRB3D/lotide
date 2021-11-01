/* const assertEqual = require('../assertEqual'); */
const {head, assertEqual} = require('../head');
assertEqual(head([5,6,7]), 2);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helo");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");