//Exercicio 1 - Objeto

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

//Exercicio 2 - Objeto

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");


//Exercicio 3 - Objeto

player["bestInTheWorld"] = [2006, 2007, 2007, 2009, 2010, 2018]

//Exercicio 4 - Objeto

player ["fullName"] = player.name + " " + player.lastName;

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");

//Exercicio 5 - Objeto

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");


//Exercicio 6 - For/in

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let show in names) {
  console.log("Olá " + names[show]);
}

//Exercicio 7 - For/in

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let show in car) {
  console.log(show, car[show]);
}