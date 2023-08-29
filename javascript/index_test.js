const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('announceDawn', () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!';

      const result = Rooster.announceDawn();

      assert.strictEqual(result, expected);
    });
  });

  describe('timeAtDown', () => {
    it('returns its argument as a string', () => {
      const expected = '5';

      const result = Rooster.timeAtDawn(5);

      assert.strictEqual(result, expected);
    });  

    it('throws an error if passed a number less than 0', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(-1);
        },
        RangeError
      );
    });

    it('throws an error if passed a number greater than 23', () => {
      assert.throws(
        () => {
          Rooster.timeAtDawn(24);
        },
        RangeError
      );
    });
  });
});