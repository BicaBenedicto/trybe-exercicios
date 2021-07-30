let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

console.log(" ");
console.log("Exercicio 1");
console.log(" ");

for (let imprimir of numbers) {
  console.log(imprimir);
}

console.log(" ");
console.log("Exercicio 2");
console.log(" ");

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  somaNumbers += numbers[indexNumbers];
}

console.log(somaNumbers);

console.log(" ");
console.log("Exercicio 3");
console.log(" ");

let medidaAritmeticaNumbers = 0;

medidaAritmeticaNumbers = somaNumbers / numbers.length;

console.log(medidaAritmeticaNumbers);

console.log(" ");
console.log("Exercicio 4");
console.log(" ");

if (medidaAritmeticaNumbers > 20) {
  console.log("Valor maior que 20");
}

else {
  console.log("Valor menor ou igual a 20");
}

console.log(" ");
console.log("Exercicio 5");
console.log(" ");

let maiorNumber = 0;
for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (maiorNumber < numbers[indexNumbers]) {
    maiorNumber = numbers[indexNumbers];
  }

}

console.log(maiorNumber);

console.log(" ");
console.log("Exercicio 6");
console.log(" ");

let impares = [];

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (numbers[indexNumbers] % 2 > 0) {
    impares.push(numbers[indexNumbers]);
  }
}

if (impares[0] == null) {
  console.log("nenhum valor ímpar encontrado");
}

else {
  for (let imprimirImpares of impares) {
    console.log(imprimirImpares);
  }
}

console.log(" ");
console.log("Exercicio 7");
console.log(" ");

let menorNumber = maiorNumber;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
  if (menorNumber > numbers[indexNumbers]) {
    menorNumber = numbers[indexNumbers];
  }
}

console.log(menorNumber);

console.log(" ");
console.log("Exercicio 8");
console.log(" ");

let array = [];

for (let index = 1; index < 26; index += 1) {
  array.push(index);
}

for (let imprimirArray of array) {
  console.log(imprimirArray);
}

console.log(" ");
console.log("Exercicio 9");
console.log(" ");

let divisaoArray = [];

for (let index = 0; index < array.length; index += 1) {
  divisaoArray.push(array[index] / 2);
}

for (let imprimirDivisaoArray of divisaoArray) {
  console.log(imprimirDivisaoArray);
}

console.log(" ");
console.log("Exercicio Bonus");
console.log(" ");

let multiNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < numbers.length - 1) {
    multiNumbers.push(numbers[index] * numbers[index + 1]);
  }
  else {
    multiNumbers.push(numbers[index] * 2);
  }
  
}

console.log("Multiplicação dos Numbers: " + multiNumbers);
console.log("");

let numbersSort = numbers;

for (let index = 1; index < numbersSort.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersSort[index] < numbersSort[secondIndex]) {
      let position = numbersSort[index];
      numbersSort[index] = numbersSort[secondIndex];
      numbersSort[secondIndex] = position;
    }
  }
}

console.log("Crescente: " + numbersSort);
console.log(" ");

for (let index = 1; index < numbersSort.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersSort[index] > numbersSort[secondIndex]) {
      let position = numbersSort[index];
      numbersSort[index] = numbersSort[secondIndex];
      numbersSort[secondIndex] = position;
    }
  }
}

console.log("Decrescente: " + numbersSort);
console.log("");

