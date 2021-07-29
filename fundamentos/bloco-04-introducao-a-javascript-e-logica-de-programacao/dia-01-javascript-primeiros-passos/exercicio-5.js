let a = 45;
let b = 45;
let c = -95;
let soma = a + b + c;

if (soma === 180) {
  console.log(true);
}

else if (soma > 180 || soma < 180 && soma >= 0) {
  console.log(false);
}

else {
  console.log("erro");
}