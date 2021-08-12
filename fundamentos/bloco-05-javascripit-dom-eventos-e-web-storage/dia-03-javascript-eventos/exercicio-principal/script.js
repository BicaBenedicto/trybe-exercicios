function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Organização Pessoal

let inputTask = document.createElement('input');
let inputContainer = document.querySelector('div.my-tasks');
let labelTask = document.createElement('label');

inputTask.type = 'text';
inputTask.id = 'inputTask';
inputTask.style.display = 'inline-block';
inputTask.style.marginLeft = 'auto';
inputTask.style.marginRight = 'auto';
inputTask.placeholder = 'Escreva uma tarefa';

labelTask.innerText = 'Tarefa: ';
labelTask.for = 'inputTask';

inputContainer.appendChild(labelTask);
inputContainer.appendChild(inputTask);

let inputColor = document.createElement('input');
let labelColor = document.createElement('label');

inputColor.type = 'text';
inputColor.id = 'inputColor';
inputColor.style.display = 'inline-block';
inputColor.style.marginLeft = 'auto';
inputColor.style.marginRight = 'auto';
inputColor.placeholder = 'Escreva um cor em inglês';

labelColor.innerText = 'Cor: ';
labelColor.for = 'inputColor';
labelColor.style.marginLeft = '10px';

inputContainer.appendChild(labelColor);
inputContainer.appendChild(inputColor);

let buttonAddTask = document.createElement('button');

buttonAddTask.id = 'buttonAddTask';
buttonAddTask.innerText = 'Adicionar';
buttonAddTask.style.display = 'block';
buttonAddTask.style.marginLeft = 'auto';
buttonAddTask.style.marginRight = 'auto';
inputContainer.appendChild(buttonAddTask);

buttonAddTask.addEventListener('click', taskList);

//Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function checkHoliday(day) {
  if (day === 24 || day === 25 || day === 31) {
    return true;
  }
}

function checkFriday(day) {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    return true;
  }
}
function calendarDays() {
  for (let i of dezDaysList) {
    let days = document.querySelector('#days');
    let dayN = document.createElement('li');
    dayN.innerText = i;
    dayN.className = 'day';
    if (checkHoliday(i)) {
      dayN.classList.add('holiday');
    };
    if (checkFriday(i)) {
      dayN.classList.add('friday');
    };
    days.appendChild(dayN);
  }
}

calendarDays();

//Exercicio 2

let buttonFeriado = document.createElement('button');
let buttonsContainer = document.querySelector('div.buttons-container');

function holidayButton(Feriados) {
  buttonFeriado.innerText = 'Feriados';
  buttonFeriado.id = 'btn-holiday';

  buttonsContainer.appendChild(buttonFeriado);
}

holidayButton();

//Exercicio 3

function changeBackColor() {
  let feriados = document.querySelectorAll('.holiday');
  for (let n of feriados) {
    if (n.style.backgroundColor !== 'purple') {
      n.style.backgroundColor = 'purple';
      n.style.color = 'white';
   } else {
    n.style.backgroundColor = '';
    n.style.color = '';
   }
  }
}

buttonFeriado.addEventListener('click', changeBackColor);

//Exercicio 4

let buttonFriday = document.createElement('button');

function fridayButton(Sexta) {
  buttonFriday.innerText = 'Sexta-feira';
  buttonFriday.id = 'btn-friday';
  buttonsContainer.appendChild(buttonFriday);
}

fridayButton()

//Exercicio 5

let sextaArray = [];

function changeText() {
  let sexta = document.querySelectorAll('.friday');
  for (let n in sexta) {
    if (sexta[n].innerText > 0) {
      sextaArray.push(sexta[n].innerText);
      sexta[n].innerText = "It's Friday Day!";
    } else {
      sexta[n].innerText = sextaArray[n];
    }
  }
}

buttonFriday.addEventListener('click', changeText);

//Exercicio 6

let days = document.querySelector('#days');

function zoomEffect(evento) {
  evento.target.style.fontSize = '30px';
}

function resetZoomEffet(evento) {
  evento.target.style.fontSize = '20px';
}

days.addEventListener('mouseover', zoomEffect);
days.addEventListener('mouseout', resetZoomEffet);

//Exercicio 7

let buttonAddComp = document.querySelector('#btn-add');

function taskList(tarefa) {
  let taskItem = document.createElement('span');
  let taskInput = document.querySelector('#inputTask');
  let taskDiv = document.querySelector('div.my-tasks');

  taskItem.innerText =  taskInput.value;
  taskChangeColor(inputColor.value);
  taskItem.innerHTML += '<br>';
  taskDiv.appendChild(taskItem);
}


//Exercicio 8

function taskChangeColor(cor) {
  let taskDiv = document.createElement('div');
  let mytaskDiv = document.querySelector('div.my-tasks');
  
  taskDiv.className = 'task';
  taskDiv.style.backgroundColor = cor;
  mytaskDiv.appendChild(taskDiv); 
  mytaskDiv.addEventListener('click', taskSelect);
}

//Exercicio 9

let divTask = document.querySelector('div.my-tasks');

function taskSelect(evento) {
  if(!evento.target.classList.contains('task-selected')) {
    evento.target.classList.add('task-selected');
  } else {
    evento.target.classList.remove('task-selected');
  }
}

//Exercicio 10 + Organização

function changeColorDay(evento) {
  let taskSelected = document.querySelectorAll('.task-selected');

  if (!evento.target.style.color) {
    for (let i of taskSelected) {
      evento.target.style.color = i.style.backgroundColor;
    }
  } else {
    evento.target.style.color = '';
  }
}

days.addEventListener('click', changeColorDay);


//Exercicio Bonus



