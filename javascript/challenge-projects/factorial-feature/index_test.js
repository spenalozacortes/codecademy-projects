var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 when you pass in 5', () => {
      const expected = 120;
      const result = Calculate.factorial(5);
      assert.equal(result, expected);
    });

    it('returns 6 when you pass in 3', () => {
      const expected = 6;
      const result = Calculate.factorial(3);
      assert.equal(result, expected);
    });

    it('returns 1 when you pass in 0', () => {
      const expected = 1;
      const result = Calculate.factorial(0);
      assert.equal(result, expected);
    });
  });
});