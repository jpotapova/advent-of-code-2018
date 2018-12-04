const day4 = require('../day4');

describe('Day 4', () => {
  const records = [
    '[1518-11-01 00:00] Guard #10 begins shift',
    '[1518-11-01 00:05] falls asleep',
    '[1518-11-01 00:25] wakes up',
    '[1518-11-01 00:30] falls asleep',
    '[1518-11-01 00:55] wakes up',
    '[1518-11-01 23:58] Guard #99 begins shift',
    '[1518-11-02 00:40] falls asleep',
    '[1518-11-02 00:50] wakes up',
    '[1518-11-03 00:05] Guard #10 begins shift',
    '[1518-11-03 00:24] falls asleep',
    '[1518-11-03 00:29] wakes up',
    '[1518-11-04 00:02] Guard #99 begins shift',
    '[1518-11-04 00:36] falls asleep',
    '[1518-11-04 00:46] wakes up',
    '[1518-11-05 00:03] Guard #99 begins shift',
    '[1518-11-05 00:45] falls asleep',
    '[1518-11-05 00:55] wakes up',
  ];
  describe('Part 1 example case', () => {
    it('Process record strings', () => {
      let recordsFew = [
        '[1518-11-01 00:00] Guard #10 begins shift',
        '[1518-11-01 00:05] falls asleep',
        '[1518-11-01 00:25] wakes up',
        '[1518-11-01 23:58] Guard #99 begins shift',
      ];
      const dataFew = [
        {
          date: '1518-11-01',
          minute: 0,
          event: 'shift',
          guard: 10
        },
        {
          date: '1518-11-01',
          minute: 5,
          event: 'asleep',
          guard: 0
        },
        {
          date: '1518-11-01',
          minute: 25,
          event: 'awake',
          guard: 0
        },
        {
          date: '1518-11-01',
          minute: -1,
          event: 'shift',
          guard: 99
        }
      ];
      expect(day4.processRecords(recordsFew)).toEqual(dataFew);
    });
    it('Count asleep minutes for each guard', () => {
      let recordsFew = [
        '[1518-11-01 00:00] Guard #10 begins shift',
        '[1518-11-01 00:05] falls asleep',
        '[1518-11-01 00:25] wakes up',
        '[1518-11-01 23:58] Guard #99 begins shift',
        '[1518-11-02 00:40] falls asleep',
        '[1518-11-02 00:50] wakes up',
      ];
      expect(day4.getAsleepMinutes(recordsFew)).toEqual({
        10: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        99: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
      });
    });
  });
});
