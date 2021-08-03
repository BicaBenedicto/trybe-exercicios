let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//Exercicio 1

console.log("Bem-vinda, " + info.personagem);

console.log(" ");
//Exercicio 2

info ["recorrente"] = "Sim";

console.log(info);

console.log(" ");
//Exercicio 3

for (let show in info) {
  console.log(show);
}

console.log(" ");
//Exercicio 4

for (let show in info) {
  console.log (info[show]);
}

console.log(" ");
//Exercicio 5

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim"
}

if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
  info2.recorrente = "Sim";
  info.recorrente = "Ambos recorrentes, Sim";
  
  for (let show in info) {
    console.log(info[show] + " e " + info2[show]);
  }
  
}

      

