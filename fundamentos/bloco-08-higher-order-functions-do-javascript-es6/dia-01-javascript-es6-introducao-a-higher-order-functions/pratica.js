const newEmployees = () => {
  const employees = {
    id1: nameCall('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nameCall('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nameCall('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nameCall = (nome) => {
  const name = {
    nomeCompleto: nome,
    email: () => `${nome.replace(' ', '').toLowerCase()}@trybe.com`,
  }
  return `${name.nomeCompleto}, ${name.email()}`;
}

const randomNumber = number => (Math.floor(Math.random() * 5) + 1) === number ? 'Parabéns você ganhou' : 'Tente novamente';

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const replyCalculation = (questions, correctReply) => {
  let output = 0;

    if (questions === correctReply) {
      output += 1;
    }
    if (questions !== correctReply) {
      if (questions !== 'N.A') {
        output -= 0.5;
      }
    } return output;
}

const avaliator = (questions, correctReply, calculator) => {
  let counter = 0;

  for (let index = 0; index < questions.length; index += 1) {
    counter += calculator(questions[index], correctReply[index]);
  }
  return counter;
}

console.log(avaliator(STUDENT_ANSWERS, RIGHT_ANSWERS, replyCalculation));
