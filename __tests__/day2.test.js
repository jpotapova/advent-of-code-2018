const day2 = require('../day2');

describe('Day 2', () => {
  describe('Part 1 example cases', () => {
    it('abcdef symbol occurences are {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1}', () => {
      expect(day2.symbolOccurences('abcdef')).toEqual({a: 1, b: 1, c: 1, d: 1, e: 1, f: 1});
    });
    it('bababc symbol occurences are {a: 2, b: 3, c: 1}', () => {
      expect(day2.symbolOccurences('bababc')).toEqual({a: 2, b: 3, c: 1});
    });
    it('abcdef contains no letters that appear exactly 3 times', () => {
      expect(day2.containsNtimes(2, day2.symbolOccurences('abcdef'))).toBe(false);
    });
    it('abcdef contains no letters that appear exactly 3 times', () => {
      expect(day2.containsNtimes(3, day2.symbolOccurences('abcdef'))).toBe(false);
    });
    it('bababc contains 2 a', () => {
      expect(day2.containsNtimes(2, day2.symbolOccurences('bababc'))).toBe(true);
    });
    it('bababc contains 3 b', () => {
      expect(day2.containsNtimes(3, day2.symbolOccurences('bababc'))).toBe(true);
    });
  });


});
