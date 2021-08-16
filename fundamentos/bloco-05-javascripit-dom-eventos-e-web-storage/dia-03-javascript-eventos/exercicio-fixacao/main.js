const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
let myWebpage = document.getElementById('mySpotrybefy');

/*
1. Copie esse arquivo e edite apenas ele; Check

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado; Check
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? Check

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; Check

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página; Check
4.1. Que tal redirecionar para seu portifólio? Check

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo; Check

Segue abaixo um exemplo do uso de event.target:
*/

function changeTech(event) {
  let e = event.target;
  if (firstLi ===  e) {
    firstLi.className = "tech";
    secondLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
  } 
  if (secondLi ===  e) {
    firstLi.classList.remove("tech");
    secondLi.className = "tech";
    thirdLi.classList.remove("tech");
  } 
  if (thirdLi ===  e) {
    firstLi.classList.remove("tech");
    secondLi.classList.remove("tech");
    thirdLi.className = "tech";
  }
}

firstLi.addEventListener('click', changeTech);
secondLi.addEventListener('click', changeTech);
thirdLi.addEventListener('click', changeTech);


function textChange() {
  let tech = document.querySelector('.tech');
  tech.innerText = input.value;
}

input.addEventListener('keyup', textChange);

function redirectPage() {
  window.location = "https://bicabenedicto.github.io/";
}

myWebpage.addEventListener('dblclick', redirectPage);

function changeColor() {
  myWebpage.style.color = "red";
  myWebpage.style.backgroundColor = "white";
}

function resetColor() {
  myWebpage.style.color = "";
  myWebpage.style.backgroundColor = "";
}

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseleave', resetColor);

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.