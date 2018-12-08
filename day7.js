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

  },
  duration(step, base) {
    const steps = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    return steps.indexOf(step) + base + 1;
  },
  areComplete(toBeDone, done) {
    return toBeDone.length === done.length;
  },
  stepsAvailable(prereq, allSteps, doneSteps, progress) {
    return allSteps.filter((step) => {
      if (doneSteps.includes(step)) return false;
      if (step in progress) return false;

      let remaining =  prereq[step].filter((prereqStep) => {
        return !doneSteps.includes(prereqStep);
      });

      return remaining.length === 0
    });
  },
  iterate(state, prereq, allSteps, base = 0) {
    const newState = {...state};
    // increase second
    newState.second++;
    // check if anything is complete
    for (var step in newState.progress) {
      if (newState.progress.hasOwnProperty(step)) {
        if (this.duration(step, base) === newState.progress[step]) {
          newState.done = newState.done + step;
          delete newState.progress[step];
          newState.workers = newState.workers.map((worker) => {
            if (worker === step) {
              return '.'
            } else {
              return worker;
            }
          });
        }
      }
    }
    // assign steps to idle workers
    newState.workers = newState.workers.map((worker) => {
      if (worker === '.') { // worker is idle
        let available = this.stepsAvailable(prereq, allSteps, newState.done, newState.progress);
        if (available.length) { // there is available step
          worker = available[0];
          newState.progress[worker] = 1;
        }
      } else { // worker is not idle
        newState.progress[worker]++;
      }
      return worker;
    });
    return newState;
  },
  total(input, workers, base) {
    let data = this.processInput(input);
    let prereq = this.allPrerequisites(data);
    let allSteps = this.allSteps(data);
    let state = {
      second: -1,
      workers: new Array(workers).fill('.'),
      done: '',
      progress: {}
    };
    while(!this.areComplete(allSteps, state.done)) {
      console.log(state);
      state = this.iterate(state, prereq, allSteps, base);
    }
    return state.second;

  }

};

module.exports = day7;
