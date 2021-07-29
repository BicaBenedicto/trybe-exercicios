//Exercicio 1
console.log("Exercicio 1");
console.log(" ");

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

console.log(" ");
console.log("Exercicio 2");
console.log(" ");
//Exercicio 2

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

console.log(" ");
console.log("Exercicio 3");
console.log(" ");

//Exercicio 3

menu.push("Contato");

console.log(menu);

console.log(" ");
console.log("Exercicio 4");
console.log(" ");

//Exercicio 4

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);

}

console.log(" ");
console.log("Exercicio 5");
console.log(" ");

//Exercicio 5

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let lista of names) {
  console.log(lista);
}