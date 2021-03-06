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
  xdescribe('part 1', () => {
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
      expect(day6.maxFinite(input)).toBe(17);
    });

  });
  xit('calculate biggest finite area for the real input', () => {
    const inputReader = require('./input-reader');
    let coords = inputReader('6');
    console.log(coords.length);
    expect(day6.maxFinite(coords)).toBe(4215);
  });

  describe('part 2', () => {
    it ('total distance for point 4, 3 is 30', () => {
      expect(day6.totalDistance(coords, {x: 4, y: 3})).toBe(30);
    })
    it('is within the region', () => {
      expect(day6.within(coords, {x: 4, y: 3}, 32)).toBe(true);
    })
    it('calc region size', () => {
      expect(day6.regionSize(input, 32)).toBe(16);
    });
    it('calc region size for the real input', () => {
      const inputReader = require('./input-reader');
      let ipunt = inputReader('6');
      expect(day6.regionSize(ipunt, 10000)).toBe(40376);
    });
  });


});
