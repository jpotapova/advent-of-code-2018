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
  // containsNtimes(times, id) {
  //   const symbols = Object.keys(foundValues);
  //   const symbolsLength = symbols.length;
  //   let foundNtimes = false;
  //   let j = 0;
  //   while (!foundNtimes && j < symbolsLength) {
  //     if (foundValues[symbolsLength[j]] === times) {
  //       foundNtimes = true;
  //     }
  //     j++;
  //   }
  //   return foundNtimes;
  // }
};

module.exports = day2;
