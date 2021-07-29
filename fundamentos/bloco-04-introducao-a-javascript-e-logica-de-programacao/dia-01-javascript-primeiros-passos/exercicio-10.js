let valorMaterial = 10;
let valorVenda = 20;
let lucro;
valorMaterial = valorMaterial + (valorMaterial * 0.2);
lucro = valorVenda - valorMaterial;


if (lucro >= 0) {
  console.log(lucro);
}

else {
  console.log("erro");
}