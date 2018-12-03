const day3 = {
  processClaim(claim) {
    let left, top, width, height;
    const parts = claim.split(' @ ')[1].split(': ');
    [left, top] = parts[0].split(',');
    [width, height] = parts[1].split('x');
    return {
      left: parseInt(left, 10),
      top: parseInt(top, 10),
      width: parseInt(width, 10),
      height: parseInt(height, 10)
    };
  },
  furthest(claim) {
    return {
      left: claim.left + claim.width,
      top: claim.top + claim.height
    };
  }
};

module.exports = day3;
