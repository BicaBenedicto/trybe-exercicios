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