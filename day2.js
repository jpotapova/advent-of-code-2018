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
    let foundNtimes = 0;
    let i = 0;
    while (!foundNtimes && i < length) {
      if (symbolOccurences[symbols[i]] === times) {
        foundNtimes = 1;
      }
      i++;
    }
    return foundNtimes;
  },
  checksum(ids) {
    const symbolOccurences = ids.map((id) => this.symbolOccurences(id));
    const n2 = symbolOccurences.reduce((counter, sO) => counter + this.containsNtimes(2, sO), 0);
    const n3 = symbolOccurences.reduce((counter, sO) => counter + this.containsNtimes(3, sO), 0);
    return n2 * n3;
  },
  sameLetters(ids) {
    const length = ids.length;
    let samePart = '';
    let i = -1;
    let s, shortenedIds, occurences;
    while (!samePart && i < length) {
      i++;
      shortenedIds = ids.map(id => id.slice(0, i) + id.slice(i+1, id.length));
      s = new Set(shortenedIds);
      if (s.size < length) {
        occurences = day2.symbolOccurences(shortenedIds);
        samePart = Object.keys(occurences).reduce((a, v) => {
          if (occurences[v] > 1) {
            a = v;
          } else {
            a = a;
          }
          return a;
        }, '');
      }
    }
    return samePart;
  }
};

module.exports = day2;
