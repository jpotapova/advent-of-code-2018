const day6 = {
  inputToCoords(input) {
    return input.map((line) => {
      let parts = line.split(',');
      return {
        x: parseInt(parts[0], 10),
        y: parseInt(parts[1], 10),
      }
    });
  },
  extremums(coords) {
    const extremums = {
      min: {x: Infinity, y: Infinity},
      max: {x: 0, y: 0}
    };
    coords.forEach((coord) => {
      if (coord.x < extremums.min.x) extremums.min.x = coord.x;
      if (coord.y < extremums.min.y) extremums.min.y = coord.y;
      if (coord.x > extremums.max.y) extremums.max.x = coord.x;
      if (coord.y > extremums.max.y) extremums.max.y = coord.y;
    });
    return extremums;
  },
  distance(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
  },
  allDistances(coords, point) {
    return coords.map((coord) => this.distance(coord, point));
  },
  closest(distances) {
    let originalArray = distances.slice();
    distances.sort((a, b) => a - b);
    if (distances[0] === distances[1]) return -1;
    let minDistance = distances[0];
    let closestIndex = -2;
    originalArray.forEach((val, index) => {
      if (val === minDistance) closestIndex = index;
    });
    return closestIndex;
  },
  borders(coords) {
    const distances = [];
    const extremums = this.extremums(coords);
    console.log(extremums);
    let x;
    let y;
    // x = min; y from min to max
    x = extremums.min.x;
    y = extremums.min.y;
    for (y; y <= extremums.max.y; y++) {
      distances.push(this.closest(this.allDistances(coords, {x, y})));
    }
    // y = min; x from min to max
    x = extremums.min.x + 1;
    y = extremums.min.y;
    for (x; x <= extremums.max.x; x++) {
      distances.push(this.closest(this.allDistances(coords, {x, y})));
    }
    // x = max; y from min to max
    x = extremums.max.x;
    y = extremums.min.y + 1;
    for (y; y <= extremums.max.y; y++) {
      distances.push(this.closest(this.allDistances(coords, {x, y})));
    }
    // y = max; x from min to max
    x = extremums.min.x + 1;
    y = extremums.max.y;
    for (x; x <= extremums.max.x - 1; x++) {
      distances.push(this.closest(this.allDistances(coords, {x, y})));
    }

    return distances;
  }
};

module.exports = day6;
