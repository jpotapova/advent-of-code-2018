const day3 = require('../day3');

describe('Day 3', () => {
  describe('Part 1 example case', () => {
    const claims = [
      '#1 @ 1,3: 4x4',
      '#2 @ 3,1: 4x4',
      '#3 @ 5,5: 2x2'
    ];
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
  });
});
