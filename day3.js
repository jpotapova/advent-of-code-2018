const day3 = {
  processClaim(claim) {
    let left, top, width, height;
    const parts = claim.split(' @ ');
    const claimInfo = parts[1].split(': ');
    [left, top] = claimInfo[0].split(',');
    [width, height] = claimInfo[1].split('x');
    const id = parts[0].replace('#', '');
    return {
      left: parseInt(left, 10),
      top: parseInt(top, 10),
      width: parseInt(width, 10),
      height: parseInt(height, 10),
      id: parseInt(id, 10)
    };
  },
  furthest(claim) {
    return {
      left: claim.left + claim.width,
      top: claim.top + claim.height
    };
  },
  fabricSize(claims) {
    const furthest = claims.map((claim) => this.furthest(this.processClaim(claim)));
    return {
      left: furthest.map((point) => point.left).sort((a, b) => b - a)[0],
      top: furthest.map((point) => point.top).sort((a, b) => b - a)[0]
    };
  },
  claimsToData(claims) {
    return claims.map((claim) => {
      let claimData = this.processClaim(claim);
      claimData.furthest = this.furthest(claimData);
      return claimData;
    });
  },
  overlapsMatrix(claimsData, size) {
    const fabric = new Array(size.left+1).fill(0).map(() => new Array(size.top+1).fill(0));
    claimsData.forEach((claim) => {
      for (let l = claim.left; l < claim.furthest.left; l++) {
        for (let t = claim.top; t < claim.furthest.top; t++) {
          fabric[l][t]++;
        }
      }
    });
    return fabric;
  },
  overlapsCount(claims) {
    const size = this.fabricSize(claims);
    const claimsData = this.claimsToData(claims);
    let fabric = this.overlapsMatrix(claimsData, size);
    let overlaps = 0;
    for (let l = 0; l < size.left+1; l++) {
      for (let t = 0; t < size.top+1; t++) {
        if (fabric[l][t] > 1) overlaps++;
      }
    }
    return overlaps;
  },
  intactClaim(claims) {
    const size = this.fabricSize(claims);
    const claimsData = this.claimsToData(claims);
    let fabric = this.overlapsMatrix(claimsData, size);
    let intactFound = false;
    const length = claimsData.length;
    let i = -1;
    while (!intactFound && i < length) {
      i++;
      intactFound = true;
      for (let l = claimsData[i].left; l < claimsData[i].furthest.left; l++) {
        for (let t = claimsData[i].top; t < claimsData[i].furthest.top+1; t++) {
          if (fabric[l][t] > 1) intactFound = false;
        }
      }
    }
    return claimsData[i].id;
  },
};

module.exports = day3;
