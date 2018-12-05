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
    });
  });

});
