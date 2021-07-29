var notaCandidato = 200;
var status;

if (notaCandidato >= 80 &&notaCandidato <=100) {
  status = "aprovada";
}
else if (notaCandidato < 80 && notaCandidato >= 60) {
  status = "lista";
}

else if (notaCandidato > 100) {
  status = "erro";
}

else {
  status = "reprovada";
}


switch (status) {

  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break; 
  
  case "lista":
    console.log("Você está em nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

    default:
      console.log("Não se aplica");

}