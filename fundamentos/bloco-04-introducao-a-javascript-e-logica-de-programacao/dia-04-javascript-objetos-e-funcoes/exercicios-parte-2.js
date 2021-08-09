//Exercicio 1
function palindromo (palavra) {
  let palindromo = "";

for(let index = palavra.length - 1; index >= 0; index -= 1) {
  palindromo += palavra[index]
}

if (palavra === palindromo) {
  return true;
} else {
  return false;
}
}

//Exercicio 2

function maiorValor (valores) {
  let maiorValor = 0;
  for (let index in valores) {
    if (valores[index] > maiorValor) {
        maiorValor = index;
      }
    
  }
  return console.log(maiorValor);
}

//Exercicio 3

function menorValor (valores) {
  let menorValor = 100;
  for (let index in valores) {
    if (valores[index] < menorValor) {
      menorValor = index;
    }
  }
  return console.log(menorValor);
}

//Exercicio 4

function maisLetras (valores) {
  let maisLetras = " ";
  for (let index of valores) {
    if (index.length > maisLetras.length) {
      maisLetras = index;
    }
  }
  return console.log(maisLetras);
}

//Exercicio 5 (Não terminado)

function maiorRepeticao (valores) {
  let count = {};
  for (let key of valores) {
    if(count[key]) {
      count[key] += 1
    } else {
      count[key] = 1;
    }
  }
  let valor1 = 0;
  let valor2 = 0;
  for (let key of valores) {
    if (count[key] > 1 && valor1 === 0) {
      valor1 = key;
    }
    else if (count[key] > 1 && count[key] !== valor1) {
      valor2 = key;
    }
  }
  let compareValor = 0;
  if (Object.values(valor1) > Object.values(valor2)) {
    compareValor = valor1;
  } else {
    compareValor = valor2;
  }
  return compareValor;
}

//Exercicio 6

function somatoria (n) {
  let sum = 0;
  for (let index = 0; index <= n; index += 1) {
    sum += index;
  }
  return console.log(sum);
}

//Exercicio 7

function verificaFimPalavra (word, ending) {
  return word.endsWith(ending);
}