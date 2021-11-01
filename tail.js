const assertEqual = require('./assertEqual');
const tail = arr => arr.length > 0 ? arr.slice(1) : [];



module.exports = {tail, assertEqual};