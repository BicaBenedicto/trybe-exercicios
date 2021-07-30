//Exercicio 1

let n = 5;


console.log("Exercicio 1");
console.log(" ");

for (let index = 0; index < n; index += 1) {
  let imp = " ";
  for (let linha = 0; linha < n; linha += 1) {
    imp = imp + "*";
  }

  console.log(imp);
 }

console.log(" ");
console.log("Exercicio 2");
console.log(" ");



for (let index = 0; index < n; index += 1) {
  let imp = " ";
  
  if (index < 5) {
    
    for (linha = 0; linha < index + 1; linha += 1) {
    imp = imp + "*";
    }
  console.log(imp);
  
  }

  else {
    console.log("erro");
  }
}

