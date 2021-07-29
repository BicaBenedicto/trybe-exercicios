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