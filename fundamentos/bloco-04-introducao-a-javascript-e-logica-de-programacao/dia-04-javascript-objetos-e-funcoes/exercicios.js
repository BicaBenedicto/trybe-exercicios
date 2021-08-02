//Exercicio 1

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

//Exercicio 2

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade");


//Exercicio 3

player["bestInTheWorld"] = [2006, 2007, 2007, 2009, 2010, 2018]

//Exercicio 4

player ["fullName"] = player.name + " " + player.lastName;

console.log("A jogadora " + player.fullName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes");

//Exercicio 5

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");