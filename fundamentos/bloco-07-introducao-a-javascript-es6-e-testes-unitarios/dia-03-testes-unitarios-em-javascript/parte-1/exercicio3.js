const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }
  return arr;
}

const array = [1, 2, 3, 4];
const number = 3;

assert.deepStrictEqual(myRemoveWithoutCopy(array, number), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy(array, number), [1, 2, 3 ,4]);

assert.notStrictEqual(array, [1, 2, 3, 4]);

assert.deepStrictEqual(myRemoveWithoutCopy(array, 5), array);
