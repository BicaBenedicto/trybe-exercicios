//Exercicio 1

let n = 7;


console.log("Exercicio 1");
console.log(" ");

for (let index = 0; index < n; index += 1) {
  let imp = "";

  for (let linha = 0; linha < n; linha += 1) {
    imp += "*";
  }

  console.log(imp);
}

//Exercicio 2

console.log(" ");
console.log("Exercicio 2");
console.log(" ");



for (let index = 0; index < n; index += 1) {
  let imp = "";
  
      for (let linha = 0; linha <= index; linha += 1) {
    imp = imp + "*";
    
    }

  console.log(imp);
}

//Exercicio 3

console.log(" ");
console.log("Exercicio 3");
console.log(" ");

for (let index = 0; index < n; index += 1) {
  let imp = "";

     for (let linha = n - 1; linha > index; linha -= 1) {
        imp = imp + " ";
      }

    for (let linha2 = 0; linha2 <= index; linha2 += 1) {
        imp = imp + "*";
      }
   
 
  console.log(imp);
}

//Exercicio 4

console.log(" ");
console.log("Exercicio 4");
console.log(" ");

for (let index = 0; index < n; index += 1) {
  if (index >= 0 && index % 2 === 0) {
  let imp = "";

    for(let line = n - 2; line > index; line -= 2) {
      imp = imp + " ";
    }

    for (let linha = 0; linha <= index; linha += 1) {
      imp = imp + "*";
    }


    console.log(imp);
  }
}

//Exercicio 5 - Bonus

console.log(" ");
console.log("Bonus");
console.log("Exercicio 5");
console.log(" ");



for (let index = 0; index < n; index += 1) {
  let pyramid = "";
    if  (index < n - 1 && index % 2 === 0) {
      
      for(let line = n - 2; line > index; line -= 2){
        pyramid += " ";
      }

      for (let linha = 0; linha <= index; linha += 1) {
        if (linha === 0 || linha === index) {
          pyramid += "*";
        }

        else if (linha > 0 && linha < index) {
          pyramid += " ";
        
        }
      
      }

    console.log(pyramid);
  }
  else if (index === n - 1) {

    for (let linha = 0; linha <= index; linha += 1) {
      pyramid += "*";
    }

    console.log(pyramid);
  }
  
}

//Exercicio 6 - Bonus

console.log(" ");
console.log("Bonus");
console.log("Exercicio 6");
console.log(" ");

  if (n / 1 === n && n / n === 1 && n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0) {
    console.log(n + " é um número primo.");
  }

  else if (n === 2 || n === 3 || n === 5) {
    console.log(n + " é um número primo.");
  }
  
  else {
    console.log (n + " não é um número primo.");
  }