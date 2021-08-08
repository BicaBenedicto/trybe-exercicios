const numberAndRomano = {
'I': 1,
'V': 5, 
'X': 10, 
'L': 50,  
'C': 100, 
'D': 500, 
'M': 1000, 
}

function convert (numberRoman) {
  let output = 0;
  let numberArray = [];
  let numberRomanArray = [];
  numberRomanArray = numberRoman.split('');

  for (let i = numberRomanArray.length - 1; i >= 0; i -= 1) {
    for (let n in numberAndRomano) {
      if (numberRomanArray[i] === n ) {
        numberArray.push(numberAndRomano[n]);
        if (numberArray[i] > numberArray[i+1]) {
          output = Math.abs(output - numberAndRomano[n]);
        } else {
          output += numberAndRomano[n];
        }
      }
    }
  }
  return output;
}