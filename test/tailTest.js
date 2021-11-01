const {assertEqual, tail} = require('../tail');
const assert = require('chai').assert; 





describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", 'Labs']), ["Lighthouse", "Labs"]);
  });
  
  it('returns ["Labs", 3] for ', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", 3]), ["Lighthouse", 3]);
  });
 
  it('returns  3 for  words.length ', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words)
    assert.strictEqual(words.length, 3);
  });


});