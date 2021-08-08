let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arrayOfNumbers(vetor) {
  let output = [];
  vetor = vector;
  for (let key of vetor) {
    for (let key2 in key) {
      if (key[key2] % 2 === 0) {
        output.push(key[key2]);
      }
    }
  }
  return output;
}


console.log(arrayOfNumbers());