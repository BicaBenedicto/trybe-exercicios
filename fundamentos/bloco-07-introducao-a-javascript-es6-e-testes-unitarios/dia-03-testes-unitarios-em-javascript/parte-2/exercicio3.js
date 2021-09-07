const assert = require('assert');

const sumAllNumbers = (arrayOfNumbers) => {
  let output = 0;

  for (let indexNumbers = 0; indexNumbers < arrayOfNumbers.length; indexNumbers += 1) {
    output += arrayOfNumbers[indexNumbers];
  }
  return output;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);