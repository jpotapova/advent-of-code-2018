const day1 = {
    calculateFrequency(changes) {
      return changes.reduce((result, change) => {
        return result + change;
      });
    }
};

module.exports = day1;
