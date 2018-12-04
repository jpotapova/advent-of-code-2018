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
  }
};

module.exports = day4;
