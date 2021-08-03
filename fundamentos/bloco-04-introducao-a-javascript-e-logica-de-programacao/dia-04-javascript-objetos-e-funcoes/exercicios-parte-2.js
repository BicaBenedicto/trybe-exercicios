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
let valores = [2, 3, 6, 7, 10, 1];
valores.join(maiorValor);

function maiorValor () {
  let maiorValor = 0;
  for (let index = 0; index < valores; index += 1) {
    for (let index2 = 1; index2 >= index; index2 += 1) {
      if (valores[index] > valores[index2]) {
        maiorValor = valores[index];
      }
      else {
        maiorValor = valores[index2];
      }
    }
  }
  return maiorValor;
}

console.log(maiorValor(valores.join(maiorValor)));