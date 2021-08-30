//Exercicio 1

const fatorial = number => {
  let count = 1;
  for (let index = 1; index <= number; index += 1) {
    count = count * index
  }
  return count;
}

console.log(fatorial(4));

//Exercicio 2

const longestWord = frase => {
  const fraseSeparada = frase.split(' ');
  let maiorPalavra = '';

  for (let index = 1; index < fraseSeparada.length; index += 1) {
    if (fraseSeparada[index].length > maiorPalavra.length) {
      maiorPalavra = fraseSeparada[index];
    }
  }
  console.log(maiorPalavra);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

//Exercicio 3

const count = document.getElementById('counter');
const buttonCount = document.getElementById('button-counter');
let clickCount = 0;
count.innerText = clickCount

buttonCount.addEventListener('click', () => {
  clickCount += 1
  count.innerText = clickCount;
});

//Exercicio 4

const returnString = frase => {
  const palavra = 'Bica';
  const arrayFrase = frase.split(' ');
  let output = '';

  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index] === 'x') {
      output += `${palavra} `;
    } else {
      output += `${arrayFrase[index]} `;
    }
  }
  return output;
}

const skills = ['Html', 'Css', 'JavaScript', 'Inteligência Emocional', 'Estratégia'];

const returnFrase = frase => {
  let output = document.createElement('ul')
  output.innerText = `${returnString(frase)} Minhas cinco principais habilidades são:`;
  document.body.appendChild(output);

  for (let index = 0; index < skills.length; index += 1) {
    const li = document.createElement('li');

    li.innerText = `${skills[index]};`;
    output.appendChild(li);
  }
}

returnFrase('Tryber x aqui!');