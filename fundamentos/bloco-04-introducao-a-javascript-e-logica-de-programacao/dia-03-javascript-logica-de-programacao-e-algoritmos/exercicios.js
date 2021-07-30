//Exercicio 1

let n = 5;

for (index = 0; index < n; index += 1) {
  let imp = " ";
  for (let linha = 0; linha < n; linha += 1) {
    imp = imp + "*";
  }

  console.log(imp);
}