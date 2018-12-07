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
    const allPrereq = {
      'A': ['C'],
      'B': ['A'],
      'C': [],
      'D': ['A'],
      'E': ['B', 'D', 'F'],
      'F': ['C']
    };
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
});
