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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function checkHoliday (day) {
  if (day === 24 || day === 25 || day === 31) {
    return true;
  }
}

function checkFriday (day) {
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    return true;
  }
}
function calendarDays () {
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

function holidayButton (Feriados) {
  let buttonFeriado = document.createElement('button');
  buttonFeriado.innerText = 'Feriados';
  buttonFeriado.id = 'btn-holiday';

  let buttonsContainer = document.querySelector('div.buttons-container');
  buttonsContainer.appendChild(buttonFeriado);
}

holidayButton();