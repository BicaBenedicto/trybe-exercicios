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

//Exercicio 5 (Não terminado)

function maiorRepeticao (valores) {
  let maiorRepeticao = 0; 
  for(let index = 0; index < valores.length; index += 1){
    let drawNumber = valores[index];
    for(let index2 = 0; index2 < valores.length; index2 += 1){
      let valoresRepete = valores[index2];
      if(valoresRepete === drawNumber){
        maiorRepeticao = valoresRepete;
      }
    }
  }
  return console.log(maiorRepeticao);
}

maiorRepeticao([2, 3, 2, 5, 8, 2, 3]);


//Exercicio 6

function somatoria (n) {
  let sum = 0;
  for (let index = 0; index <= n; index += 1) {
    sum += index;
  }
  return console.log(sum);
}

somatoria(5);