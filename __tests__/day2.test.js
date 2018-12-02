const day2 = require('../day2');

describe('Day 2', () => {
  describe('Part 1 example cases', () => {
    describe('Count symbol occurences', () => {
      it('abcdef symbol occurences are {a: 1, b: 1, c: 1, d: 1, e: 1, f: 1}', () => {
        expect(day2.symbolOccurences('abcdef')).toEqual({a: 1, b: 1, c: 1, d: 1, e: 1, f: 1});
      });
      it('bababc symbol occurences are {a: 2, b: 3, c: 1}', () => {
        expect(day2.symbolOccurences('bababc')).toEqual({a: 2, b: 3, c: 1});
      });
    });
    describe('Detect if an ID contains a symbol exactly N times', () => {
      it('abcdef contains no letters that appear exactly 3 times', () => {
        expect(day2.containsNtimes(2, day2.symbolOccurences('abcdef'))).toBe(0);
      });
      it('abcdef contains no letters that appear exactly 3 times', () => {
        expect(day2.containsNtimes(3, day2.symbolOccurences('abcdef'))).toBe(0);
      });
      it('bababc contains 2 a', () => {
        expect(day2.containsNtimes(2, day2.symbolOccurences('bababc'))).toBe(1);
      });
      it('bababc contains 3 b', () => {
        expect(day2.containsNtimes(3, day2.symbolOccurences('bababc'))).toBe(1);
      });
    });
    describe('Calculate the checksum', () => {
      it('Checksum for [\'abcdef\', \'bababc\', \'abbcde\', \'abcccd\', \'aabcdd\', \'abcdee\', \'ababab\' is 12', () => {
        const ids = [
          'abcdef',
          'bababc',
          'abbcde',
          'abcccd',
          'aabcdd',
          'abcdee',
          'ababab'
        ];
        expect(day2.checksum(ids)).toBe(12);
      });
    });
  });
  describe('Part 1 real input', () => {
    let ids;
    beforeAll(() => {
      const inputReader = require('./input-reader');
      ids = inputReader('2');
    });
    it('Checksum is 8715', () => {
      expect(day2.checksum(ids)).toBe(8715);
    });
  });
  describe('Part 2 example cases', () => {
    let ids = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
    it("For ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'] input common letters are fgij", () => {
      expect(day2.sameLetters(ids)).toBe('fgij');
    });
  });
});
