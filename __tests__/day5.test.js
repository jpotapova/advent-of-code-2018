const day5 = require('../day5');

describe('Day 5', () => {
  describe('part 1', () => {
    it('check if 2 letters react', () => {
      expect(day5.react('c', 'C')).toBe(true);
      expect(day5.react('C', 'C')).toBe(false);
    });
    it('process the first found reaction', () => {
      expect(day5.reaction('dabAcCaCBAcCcaDA')).toEqual('dabAaCBAcCcaDA');
    });
    it('process the polymer until stabilisation', () => {
      expect(day5.stabilise('dabAcCaCBAcCcaDA')).toEqual('dabCBAcaDA');
      expect(day5.part1('dabAcCaCBAcCcaDA')).toBe(10);
    });
    xit('process the real polymer', () => {
      const inputReader = require('./input-reader');
      let polymer = inputReader('5')[0];
      expect(day5.part1(polymer)).toBe(9078);
    });
  });
  xdescribe('part 2', () => {
    it('remove unit and stabilise', () => {
      expect(day5.modifyPolymer('dabAcCaCBAcCcaDA', 'a')).toBe(6);
    });
    it('find shortest polymer', () => {
      expect(day5.shortest('dabAcCaCBAcCcaDA')).toBe(4);
    });
    it('find shortest for the real polymer', () => {
      const inputReader = require('./input-reader');
      let polymer = inputReader('5')[0];
      expect(day5.shortest(polymer)).toBe(5698);
    });
  });

});
