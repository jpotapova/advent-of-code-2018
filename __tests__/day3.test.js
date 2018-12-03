const day3 = require('../day3');

describe('Day 3', () => {
  const claims = [
    '#1 @ 1,3: 4x4',
    '#2 @ 3,1: 4x4',
    '#3 @ 5,5: 2x2'
  ];
  xdescribe('Part 1 example case', () => {
    describe('Claim is converted to an object', () => {
      it('#1 @ 1,3: 4x4 to {left: 1, top: 3, width: 4, height: 4}', () => {
        expect(day3.processClaim('#1 @ 1,3: 2x4')).toEqual({left: 1, top: 3, width: 2, height: 4});
      });
      it('#2 @ 3,1: 4x4 to {left: 3, top: 1, width: 4, height: 4}', () => {
        expect(day3.processClaim('#2 @ 3,1: 4x5')).toEqual({left: 3, top: 1, width: 4, height: 5});
      });
    });
    describe('furthest point is calculated for each claim', () => {
      it('#1 @ 1,3: 4x4 to {left: 1, top: 3, width: 4, height: 4}', () => {
        expect(day3.furthest({left: 1, top: 3, width: 2, height: 4})).toEqual({left: 3, top: 7});
      });
      it('#2 @ 3,1: 4x4 to {left: 3, top: 1, width: 4, height: 4}', () => {
        expect(day3.furthest({left: 3, top: 1, width: 4, height: 5})).toEqual({left: 7, top: 6});
      });
    });
    describe('Calculate the maximum fabric size', () => {
      it('for [ #1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2]', () => {
        expect(day3.fabricSize(claims)).toEqual({left: 7, top: 7});
      });
    });
    describe('Overlapping claims', () => {
      it('for [ #1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2]', () => {
        expect(day3.overlapsCount(claims)).toEqual(4);
      });
    });
  });
  xdescribe('Part 2 example case', () => {
    describe('Intact claim data', () => {
      it('for [ #1 @ 1,3: 4x4, #2 @ 3,1: 4x4, #3 @ 5,5: 2x2]', () => {
        expect(day3.intactClaim(day3.overlapsMatrix(claims))).toEqual({left: 5, top: 5, width: 2, height: 2});
      });
    });
  });
  describe('Real input', () => {
    let claims;
    beforeAll(() => {
      const inputReader = require('./input-reader');
      claims = inputReader('3');
    });
    it('Overlaps count', () => {
      expect(day3.overlapsCount(claims)).toBe(105071);
    });
  });
});
