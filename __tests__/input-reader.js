function inputReader(day) {
  const fs = require('fs');
  const contents = fs.readFileSync(`__tests__/day${day}-input.txt`, 'utf8');
  return contents.split(/\r?\n/);
}

module.exports = inputReader;
