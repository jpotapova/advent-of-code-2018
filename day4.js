const day4 = {
  processRecords(records) {
    return records.map((record) => {
      let recordParts = record.split('] ');
      let timeParts = recordParts[0].split(' ');
      let date = timeParts[0].replace('[', '');
      let minute = timeParts[1];
      if (minute.includes('23')) {
        minute = -1;
      } else {
        minute = parseInt(minute.replace('00:', ''), 10);
      }

      let event = recordParts[1];
      if (event.includes("wakes")) {
        event = "awake";
      } else if (event.includes("asleep")) {
        event = "asleep";
      } else {
        event = "shift";
      }

      let guard = 0;
      if (recordParts[1].includes('#')) {
        let eventParts = recordParts[1].split(' ');
        guard = parseInt(eventParts[1].replace('#', ''), 10);
      }

      return {
        date,
        minute,
        event,
        guard
      };

    });
  },
  addGuard(mins, guard) {
    if (guard in mins) return mins;
    mins[guard] = [];
    return mins;
  },
  addMinutes(mins, guard, start, end) {
    for (let i = start; i < end; i++) {
      mins[guard].push(i);
    }
    return mins;
  },
  getAsleepMinutes(records) {
    const data = this.processRecords(records);
    let mins = {};
    const length = records.length;
    let guard = 0;
    let asleep = -1;
    for (let i = 0; i < length; i++) {
      let r = data[i];
      if (r.event === 'shift') {
        guard = r.guard;
        mins = this.addGuard(mins, r.guard);
        asleep = -1;
      } else if (r.event === 'asleep') {
        asleep = r.minute;
      } else {
        // awake
        mins = this.addMinutes(mins, guard, asleep, r.minute);
        asleep = -1;
      }
    }
    return mins;
  }
};

module.exports = day4;
