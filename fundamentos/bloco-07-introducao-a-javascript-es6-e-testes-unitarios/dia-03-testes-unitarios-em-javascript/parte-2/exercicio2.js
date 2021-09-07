const assert = require('assert');

const wordLengths = (arrayOfWord) => {
  const output = [];

  for (let index = 0; index < arrayOfWord.length; index += 1) {
    output.push(arrayOfWord[index].length);
  }
  return output;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);