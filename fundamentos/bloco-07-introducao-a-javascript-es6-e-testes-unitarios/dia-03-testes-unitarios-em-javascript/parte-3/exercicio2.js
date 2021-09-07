const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  let count = 0;
  let results = '';

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      count += 1
      results += count;
    } else {
      results += characters[index];
    }
  }
  return results.toString();
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.deepStrictEqual(removeVowels(parameter), result);