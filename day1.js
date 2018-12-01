const day1 = {
    calculateFrequency(changes) {
      return changes.reduce((result, change) => {
        if (!isNaN(change)) return result + change;
        return result;
      });
    }
};

module.exports = day1;
