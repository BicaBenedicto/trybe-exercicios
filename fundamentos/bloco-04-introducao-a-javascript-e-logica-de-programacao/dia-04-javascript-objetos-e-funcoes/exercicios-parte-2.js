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
let valoresArray = [2, 3, 6, 7, 10, 1];

function maiorValor () {
  let maiorValor = 0;
  let valores = valoresArray;
  for (let index in valores) {
    if (valores[index] > maiorValor) {
        maiorValor = index;
      }
    
  }
  return console.log(maiorValor);
}

maiorValor();

//Exercicio 3

let valoresArray2 = [2, 4, 6, 7, 10, 0, -3];

function menorValor () {
  let menorValor = 100;
  let valores = valoresArray2;
  for (let index in valores) {
    if (valores[index] < menorValor) {
      menorValor = index;
    }
  }
  return console.log(menorValor);
}

menorValor();