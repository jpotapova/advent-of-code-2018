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
  },
  part1(polymer) {
    return this.stabilise(polymer).length;
  },
  modifyPolymer(polymer, unit) {
    polymer = polymer.replace(new RegExp(unit, 'g'), '');
    polymer = polymer.replace(new RegExp(unit.toUpperCase(), 'g'), '');
    return this.part1(polymer);
  },
  shortest(polymer) {
    const units = "abcdefghijklmnopqrstuvwxyz";
    const length = units.length;
    let polymers = [];
    for (let i = 0; i < length; i++) {
      polymers.push(this.modifyPolymer(polymer, units[i]));
    }
    polymers.sort((a, b) => a - b);
    return polymers[0];
  }
};

module.exports = day5;
