const day5 = {
  react(letter1, letter2) {
    return Math.abs(letter1.charCodeAt(0) - letter2.charCodeAt(0)) === 32;
  },
  reaction(polymer) {
    let reagentsFound = false;
    const length = polymer.length - 1;
    let i = 0;
    while (!reagentsFound && i < length) {
      if (this.react(polymer[i], polymer[i+1])) {
        reagentsFound = true;
        polymer = polymer.substring(0, i) + polymer.substring(i+2);
      }
      i++;
    }
    return polymer;
  },
  stabilise(polymer) {
    let length = polymer.length;
    let stable = false;
    while (!stable) {
      polymer = this.reaction(polymer);
      if (polymer.length === length) {
        stable = true;
      } else {
        length = polymer.length;
      }
    }
    return polymer;
  }
};

module.exports = day5;
