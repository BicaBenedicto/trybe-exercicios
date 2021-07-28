let valor = "BISPO";
valor = valor.toLowerCase();
let bispo = "diagonais quantas casas quiser";
let rei = "retas e diagonais, 1 casa por vez";
let rainha = "retas e diagonais, quantas casas quiser";
let torre = "retas, quantas casas quiser";
let peão = "frente, 1 casa por vez e captura na diagonal";
let cavalo = "Em L, podendo ir 3 casas para horizonal e 2 para vertical, ou 2 horizontal e 3 para vertical, ele pula peças";

switch (valor) {
  case "bispo":
    console.log(bispo);
    break;
  case "rei":
    console.log(rei);
    break;
  case "rainha":
    console.log(rainha);
    break;
  case "torre":
    console.log(torre);
    break;
  case "peão":
    console.log(peão);
    break;
  case "cavalo":
    console.log(cavalo);
    break;
  default:
    console.log("erro");
}
