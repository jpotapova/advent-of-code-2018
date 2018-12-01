const day1 = require('../day1');

describe('Day 1', () => {
  describe('Part 1', () => {
    it('Frequency changes +1, +1, +1 results in 3', () => {
      expect(day1.calculateFrequency([1, 1, 1])).toBe(3);
    });
    it('Frequency changes +1, +1, -2 results in 0', () => {
      expect(day1.calculateFrequency([1, 1, -2])).toBe(0);
    });
    it('Frequency changes -1, -2, -3 results in -6', () => {
      expect(day1.calculateFrequency([-1, -2, -3])).toBe(-6);
    });
    it('Frequency changes listed in the file result in 454', () => {
      const fs = require('fs');
      const contents = fs.readFileSync('__tests__/day1-input.txt', 'utf8');
      const changes = contents.split(/\r?\n/).map((change) => parseInt(change, 10));
      expect(day1.calculateFrequency(changes)).toBe(454);
    });
  });

  describe('Part 2', () => {
    it('For frequency changes +1 -1 first frequency the device reaches twice is 0', () => {
      expect(day1.frequencyRepeated([1, -1])).toBe(0);
    });
    it('For frequency changes +3 +3 +4 -2 -4 first frequency the device reaches twice is 10', () => {
      expect(day1.frequencyRepeated([3, 3, 4, -2, -4])).toBe(10);
    });
    it('For frequency changes -6 +3 +8 +5 -6 first frequency the device reaches twice is 10', () => {
      expect(day1.frequencyRepeated([-6, 3, 8, 5, -6])).toBe(5);
    });
  });
});
