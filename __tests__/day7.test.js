const day7 = require('../day7');

describe('Day 7', () => {
  const input = [
    'Step C must be finished before step A can begin.',
    'Step C must be finished before step F can begin.',
    'Step A must be finished before step B can begin.',
    'Step A must be finished before step D can begin.',
    'Step B must be finished before step E can begin.',
    'Step D must be finished before step E can begin.',
    'Step F must be finished before step E can begin.',
  ];
  const data = [
    ['C', 'A'],
    ['C', 'F'],
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'E'],
    ['D', 'E'],
    ['F', 'E']
  ];
  const allPrereq = {
    'A': ['C'],
    'B': ['A'],
    'C': [],
    'D': ['A'],
    'E': ['B', 'D', 'F'],
    'F': ['C']
  };
  it('input converted to data', () => {
    expect(day7.processInput(input)).toEqual(data);
  });
  it('get all steps', () => {
    expect(day7.allSteps(data)).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });
  it('get prerequisites', () => {
    expect(day7.prerequisites(data, 'A')).toEqual(['C']);
    expect(day7.prerequisites(data, 'E')).toEqual(['B', 'D', 'F']);
  });
  it('all prerequisites', () => {
    expect(day7.allPrerequisites(data)).toEqual(allPrereq);
  });
  it('sort steps', () => {
    expect(day7.sortSteps(input)).toEqual('CABDFE');
  });
  it('sort real steps', () => {
    const inputReader = require('./input-reader');
    let input = inputReader('7');
    expect(day7.sortSteps(input)).toEqual('OUGLTKDJVBRMIXSACWYPEQNHZF');
  });
  it('Step duration is calculated', () => {
      expect(day7.duration('A', 0)).toBe(1);
      expect(day7.duration('Z', 0)).toBe(26);
      expect(day7.duration('Z', 60)).toBe(86);
      expect(day7.duration('C', 0)).toBe(3);
  });
  it('steps complete', () => {
    expect(day7.areComplete('OUGLTKDJVBRMIXSACWYPEQNHZF', 'OUGLTKDJVBRMIXSACWYPEQNHZF')).toBe(true);
    expect(day7.areComplete('OUGLTKDJVBRMIXSACWYPEQNHZF', 'OUGLTKDJVBRMIXSACWYPEQNHZ')).toBe(false);
  });
  it('steps available', () => {
    expect(day7.stepsAvailable(allPrereq, ['A', 'B', 'C', 'D', 'E', 'F'], 'CA', {})).toEqual(['B', 'D', 'F']);
  })
  it('iterate 1 sec', () => {
    let initialState = {
      second: -1,
      workers: [
        '.', '.',
      ],
      done: '',
      progress: {}
    };
    let state0 = {
      second: 0,
      workers: ['C', '.'],
      done: '',
      progress: {
        'C': 1
      }
    };
    let state1 = {
      second: 1,
      workers: ['C', '.'],
      done: '',
      progress: {
        'C': 2
      }
    };
    let state2 = {
      second: 2,
      workers: ['C', '.'],
      done: '',
      progress: {
        'C': 3
      }
    };
    let state3 = {
      second: 3,
      workers: ['A', 'F'],
      done: 'C',
      progress: {
        'A': 1,
        'F': 1
      }
    };
    expect(day7.iterate(initialState, allPrereq, ['A', 'B', 'C', 'D', 'E', 'F'])).toEqual(state0);
    expect(day7.iterate(state0, allPrereq, ['A', 'B', 'C', 'D', 'E', 'F'])).toEqual(state1);
    expect(day7.iterate(state1, allPrereq, ['A', 'B', 'C', 'D', 'E', 'F'])).toEqual(state2);
    expect(day7.iterate(state2, allPrereq, ['A', 'B', 'C', 'D', 'E', 'F'])).toEqual(state3);
  });
});
