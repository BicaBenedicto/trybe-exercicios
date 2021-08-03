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

console.log(palindromo("arara"));

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

maiorValor([2, 3, 6, 7, 10, 1]);

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

menorValor([2, 4, 6, 7, 10, 0, -3]);

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

maisLetras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);