const day2 = {
  symbolOccurences(id) {
    const length = id.length;
    const foundValues = {};
    for (let i = 0; i < length; i++) {
      if (id[i] in foundValues) {
        foundValues[id[i]]++
      } else {
        foundValues[id[i]] = 1;
      }
    }
    return foundValues;
  },
  containsNtimes(times, symbolOccurences) {
    const symbols = Object.keys(symbolOccurences);
    const length = symbols.length;
    let foundNtimes = false;
    let i = 0;
    while (!foundNtimes && i < length) {
      if (symbolOccurences[symbols[i]] === times) {
        foundNtimes = true;
      }
      i++;
    }
    return foundNtimes;
  }
};

module.exports = day2;
