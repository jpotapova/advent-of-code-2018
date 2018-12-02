const day2 = require('../day2');

describe('Day 2', () => {
  describe('Part 1 example cases', () => {
    it('abcdef contains no letters that appear exactly 3 times', () => {
      expect(day2.containsNtimes(2, 'abcdef')).toBe(false);
    });
    it('abcdef contains no letters that appear exactly 3 times', () => {
      expect(day2.containsNtimes(3, 'abcdef')).toBe(false);
    });
    it('bababc contains 2 a', () => {
      expect(day2.containsNtimes(2, 'bababc')).toBe(true);
    });
    it('bababc contains 3 b', () => {
      expect(day2.containsNtimes(3, 'bababc')).toBe(true);
    });
  });


});
