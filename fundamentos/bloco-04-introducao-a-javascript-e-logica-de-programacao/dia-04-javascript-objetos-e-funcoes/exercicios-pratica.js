//Exercicio 1

function aritmetica (valor1, valor2, operacao) {
  if(operacao === "adição") {
    return valor1 + valor2;
  }
  else if (operacao === "subtração") {
    return valor1 - valor2;
  }
  else if (operacao === "divisão") {
    return valor1 / valor2;
  }
  else if (operacao === "multiplicação") {
    return valor1 * valor2;
  }
  else if (operacao === "módulo") {
    return valor1 % valor2;
  }
  else {
    return console.log("Operação inválida.");
  }
  return aritmetica;
}

console.log(aritmetica(20, 10, "adição"));

//Exercicio 2

function maiorQueDoisNumeros (valor1, valor2) {
  if (valor1 > valor2) {
    return console.log(valor1 + " é maior que " + valor2);
  }
  else if (valor2 > valor1) {
    return console.log(valor2 + " é maior que " + valor1);
  }
  else {
    return console.log(valor1 + " e " + valor2 + " são iguais.");
  }
}

maiorQueDoisNumeros(5,10);

//Exercicio 3

function maiorQueTresNumeros (valor1, valor2, valor3) {
  if (valor1 > valor2 && valor1 > valor3) {
    return console.log(valor1 + " é maior que " + valor2 + " e " + valor3);
  }
  else if(valor2 > valor1 && valor2 > valor3) {
    return console.log(valor2 + " é maior que " + valor1 + " e " + valor3);
  }
  else if (valor3 > valor1 && valor3 > valor2) {
    return console.log(valor3 + " é maior que " + valor1 + " e " + valor2);
  }
  else if (valor1 === valor2 === valor3) {
    return console.log(valor1 + " e " + valor2 + " e " + valor3 + " são iguais.");
  }
  else {
    return console.log("2 valores são iguais e 1 é maior/menor");
  }
}

maiorQueTresNumeros(2,3,10);

//Exercicio 4

function positiveNegative(valor) {
  if (valor > 0) {
    console.log ("positive");
  }
  else if (valor < 0) {
    console.log("negative");
  }
  else {
    console.log("zero");
  }
}

positiveNegative(10)

//Exercicio 5

function triangulo (angulo1, angulo2, angulo3) {
  let anguloTriangulo = false;
  if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        anguloTriangulo = true;
    }
    else if (angulo1 + angulo2 + angulo3 < 180 || angulo1 + angulo2 + angulo3 > 180) {
        anguloTriangulo = false;
    }
    else {
        console.log("Erro, valor invalido");
    }
  }
  return anguloTriangulo;
}

console.log(triangulo(45,45,90));

//Exercicio 6

function pecaXadrez(nomePeça) {
  let valor = nomePeça;
valor = valor.toLowerCase();

switch (valor) {
  case "bispo":
    console.log("diagonais quantas casas quiser");
    break;
  case "rei":
    console.log("retas e diagonais, 1 casa por vez");
    break;
  case "rainha":
    console.log("retas e diagonais, quantas casas quiser");
    break;
  case "torre":
    console.log("retas, quantas casas quiser");
    break;
  case "peão":
    console.log("frente, 1 casa por vez e captura na diagonal");
    break;
  case "cavalo":
    console.log("Em L, podendo ir 3 casas para horizonal e 2 para vertical, ou 2 horizontal e 3 para vertical, ele pula peças");
    break;
  default:
    console.log("erro");
}

}

pecaXadrez("RaiNha");

//Exercicio 7

function nota(valor) {
  if (valor >= 90 && valor < 101) {
    console.log("A");
  }
  
  else if (valor >= 80 && valor < 90) {
    console.log("B");
  }
  
  else if (valor >= 70 && valor < 80) {
    console.log("C");
  }
  
  else if (valor >= 60 && valor < 70) {
    console.log("D");
  }
  
  else if (valor >= 50 && valor < 60) {
    console.log("E");
  }
  
  else if (valor < 50 && valor >= 0) {
    console.log("F");
  }
  
  else {
    console.log("erro");
  }
}

nota(91);

//Exercicio 8

function parComparador(valor1,valor2,valor3) {
  if (valor1 % 2 === 0 || valor2 % 2 === 0 || valor3 % 2 === 0) {
    console.log(true);
  }
  
  else {
    console.log(false);
  }
}

parComparador(10,13,11);

//Exercicio 9

function imparComparador(valor1,valor2,valor3) {
  if (valor1 % 2 > 0 || valor2 % 2 > 0 || valor3 % 2 > 0) {
    console.log(true);
  }
  
  else {
    console.log(false);
  }
}

imparComparador(10,13, 11);

//Exercicio 10

function lucroCalculator (valorMaterial, valorVenda) {
  let lucro;
  valorMaterial = valorMaterial + (valorMaterial * 0.2);
  lucro = valorVenda - valorMaterial;

  if (lucro >= 0) {
    console.log(lucro);
  }

  else {
    console.log("erro");
  }
}

lucroCalculator(10,20);

//Exercicio 11

function salarioDesconto (valor) {
  let salario = valor;
  if (salario <= 1556.94 && salario >= 0) {
  salario = salario - (salario * 0.08);
  }

  else if (salario >1556.94 && salario < 2594.92) {
    salario = salario - (salario * 0.09);
  }

  else if (salario >2594.92 && salario < 5189.82) {
    salario = salario - (salario * 0.11);
  }

  else if (salario > 5189.82) {
    salario = salario - (salario * 0.09);
  }

  else {
    console.log("Erro, salario abaixo de 0");
  }

  if (salario <= 1903.98 && salario >= 0) {
  }

  else if (salario >1903.98 && salario <= 2826.65) {
    salario = salario - ((salario * 0.075)-142.80);
  }

  else if (salario >2826.65 && salario <= 3751.05) {
    salario = salario - ((salario * 0.15)-354.80);
  }

  else if (salario >3751.05 && salario <= 4664.68) {
    salario = salario - ((salario * 0.225)-636.13);
  }

  else {
    salario = salario - ((salario * 0.275)-869.36);
  }

  return salario;
}

console.log(salarioDesconto(3000));