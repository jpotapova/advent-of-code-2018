const day6 = require('../day6');

describe('Day 6', () => {
  const input = [
    '1, 1',
    '1, 6',
    '8, 3',
    '3, 4',
    '5, 5',
    '8, 9'
  ];
  const coords = [
    {x: 1, y: 1}, // 0
    {x: 1, y: 6}, // 1
    {x: 8, y: 3}, // 2
    {x: 3, y: 4}, // 3
    {x: 5, y: 5}, // 4
    {x: 8, y: 9}, // 5
  ];
  const distances = [0, 5, 9, 5, 8, 15];
  const internal = [
    -1, -1, -1, -1,
    0,
    1, 1, 1,
    2, 2, 2, 2, 2,
    3, 3, 3, 3, 3, 3, 3, 3, 3,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
    5, 5, 5,
  ];
  const borders = [
    -1, -1, -1, -1,
    0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2,
    5, 5, 5, 5, 5, 5, 5,
  ];
  describe('part 1', () => {
    it('process input to coords', () => {
      expect(day6.inputToCoords(input)).toEqual(coords);
    });
    it('find min and max coords', () => {
      const extremums = {
        min: {x: 1, y: 1},
        max: {x: 8, y: 9}
      };
      expect(day6.extremums(coords)).toEqual(extremums);
    });
    it('find distance', () => {
      expect(day6.distance({x: 1, y: 1}, {x: 3, y: 4})).toEqual(5);
    });
    it('get all distances for a coordinate', () => {
      expect(day6.allDistances(coords, {x: 1, y: 1})).toEqual(distances);
    });
    it('select the closest point', () => {
      expect(day6.closest(distances)).toBe(0);
    });
    it('calculate distance for each border coord', () => {
      expect(day6.borders(coords).sort((a, b) => a - b)).toEqual(borders);
    });
    it('list potential coords', () => {
      expect(day6.candidates(coords)).toEqual([3, 4]);
    });
    it('calculate closest for each internal point', () => {

      expect(day6.internal(coords).sort((a, b) => a - b)).toEqual(internal);
    });
    it('calculate occurences', () => {
      expect(day6.occurences(internal, 4)).toBe(17);
    });
    it('calculate biggest finite area size', () => {
      expect(day6.maxFinite(coords)).toBe(17);
    });
  });

});
