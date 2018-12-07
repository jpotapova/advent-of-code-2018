const day7 = {
  processInput(input) {
    return input.map((line) => {
      return line.replace('Step ', '').replace(' can begin.', '').split(' must be finished before step ');
    });
  },
  allSteps(data) {
    const steps = [];
    data.forEach((step) => {
      if (!steps.includes(step[0])) steps.push(step[0]);
      if (!steps.includes(step[1])) steps.push(step[1]);
    });
    return steps.sort();
  },
  prerequisites(data, step) {
    return data
            .filter((rule) => rule[1] === step)
            .map((step) => step[0])
            .sort();
  },
  allPrerequisites(data) {
    const all = {};
    this.allSteps(data).forEach((step) => {
      all[step] = this.prerequisites(data, step);
    });
    return all;
  },
  sortSteps(input) {
    let data = this.processInput(input);
    let prereq = this.allPrerequisites(data);
    let allSteps = this.allSteps(data);
    let length = allSteps.length;
    let newSteps = [];
    while (newSteps.length < length) {
      let nextSteps = allSteps.filter((step) => {
        return prereq[step].length === 0;
      }).sort();
      let stepToAdd = nextSteps[0];
      newSteps.push(stepToAdd);
      allSteps = allSteps.filter((step) => stepToAdd !== step);
      for (var step in prereq) {
        if (prereq.hasOwnProperty(step)) {
          if (step === stepToAdd) {
            delete prereq[step];
          } else {
            prereq[step] = prereq[step].filter((step) => stepToAdd !== step);
          }

        }
      }
    }
    return newSteps.join('');

  }

};

module.exports = day7;
