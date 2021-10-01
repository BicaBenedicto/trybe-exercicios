// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const show = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => show.innerText = data.joke);
};

const numberRandom = () => {
  const numbers = [];
  const elevator = [];
  let sum = 0;

  for (let index = 0; index < 50; index += 1) {
    numbers.push(Math.floor(Math.random() * 50));
  }
  numbers.map((value) => {
    elevator.push(value * value);
  });
  elevator.forEach((value) => sum += value);
  return sum;
}

const promise = new Promise(function (resolve, reject) {
  const number = numberRandom();
  if (number < 8000) resolve(number);
  reject(number);
});

const result = [];

promise.then((e) => {
  console.log('Promise resolvida');
  result.push(e / 2);
  result.push(e / 3);
  result.push(e / 5);
  result.push(e / 10);
  return result;
}).catch(() => {
  console.log('Promise rejeitada');
  console.log('É mais de oito mil! Essa promise deve estar quebrada!');
});

const newPromise = async () => {
  let sum = 0;
  try {
  await promise.then(() => {
    result.forEach((value) => sum += value);
  });
  console.log(sum)
  } catch (e) {
    console.log(e);
  }
};

window.onload = () => {
  newPromise();
  fetchJoke();
};