const day1 = {
  calculateFrequency(changes) {
    return changes.reduce((result, change) => {
      if (!isNaN(change)) return result + change;
      return result;
    });
  },
  frequencyRepeated(changes) {
    let frequency = 0;
    let foundFrequencies = [0];
    let foundRepeated = false;
    let index = -1;
    let changesLength = changes.length;
    let updatedFrequency;
    while (!foundRepeated) {
      index = (index + 1) % changesLength;
      updatedFrequency = frequency + changes[index];
      if (foundFrequencies.includes(updatedFrequency)) {
        foundRepeated = true;
      } else {
        foundFrequencies.push(updatedFrequency);
        frequency = updatedFrequency;
      }
    }
    return updatedFrequency;
  }
};

module.exports = day1;
