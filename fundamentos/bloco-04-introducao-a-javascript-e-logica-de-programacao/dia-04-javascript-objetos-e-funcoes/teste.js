let valores = [2, 3, 2, 5, 8, 2, 3];

function teste (valores) {
  for (let key in valores) {
    if (valores.indexOf(valores[key]) != key) {
      return true;
    }
    else {
      return false;
    }
  }
}

console.log(teste());