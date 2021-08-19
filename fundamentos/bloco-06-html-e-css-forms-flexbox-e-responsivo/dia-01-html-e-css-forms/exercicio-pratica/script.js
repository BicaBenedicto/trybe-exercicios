states = {
  'AC': 'Acre' ,
  'AL': 'Alagoas' ,
  'AP': 'Amapá' ,
  'AM': 'Amazonas' ,
  'BA': 'Bahia' ,
  'CE': 'Ceará' ,
  'DF': 'Distrito Federal' ,
  'ES': 'Espírito Santo' ,
  'GO': 'Goías' ,
  'MA': 'Maranhão' ,
  'MT': 'Mato Grosso' ,
  'MS': 'Mato Grosso do Sul' ,
  'MG': 'Minas Gerais' ,
  'PA': 'Pará' ,
  'PB': 'Paraíba' ,
  'PR': 'Paraná' ,
  'PE': 'Pernambuco' ,
  'PI': 'Piauí' ,
  'RJ': 'Rio de Janeiro' ,
  'RN': 'Rio Grande do Norte' ,
  'RS': 'Rio Grande do Sul' ,
  'RO': 'Rondônia' ,
  'RR': 'Roraíma' ,
  'SC': 'Santa Catarina' ,
  'SP': 'São Paulo' ,
  'SE': 'Sergipe' ,
  'TO': 'Tocantins' ,
};

function selectStates() {
  const select = document.getElementById('estado');

  for(let index in states) {
    const state = document.createElement('option');

    state.innerText = states[index];
    state.value = index;
    select.appendChild(state);
  }
}

selectStates();

let dateError = [];

function checkDay(day) {
  const dayString = day[0] + day[1];
  const dayNumber = parseInt(dayString);
  let output = false;

  if (dayNumber > 0 && dayNumber < 32) {
    output = true;
  } if (!output) {
  dateError.push('Dia invalido');
  }
  return output;
}

function checkMonth(month) {
  const monthString = month[3] + month[4];
  const monthNumber = parseInt(monthString);
  let output = false;

  if (monthNumber > 0 && monthNumber <= 12) {
    output = true;
  } if (!output) {
  dateError.push('Mês invalido');
  }
  return output;
}
function checkYear(year) {
  const yearString = year[6] + year[7] + year[8] + year[9];
  const yearNumber = parseInt(yearString);
  let output = false;

  if (yearNumber > 0) {
    output = true;
  } if (!output) {
  dateError.push('Ano invalido');
  }
  return output;
}

function checkDateFormat(date) {
  const dateString = date[2] + date[5];
  let output = false;

  if (dateString.includes('//')) {
    output = true;
  } if (!output) {
  dateError.push('Formato invalido');
  }
  return output;
}

function compareCheckDate(date) {
  return checkDay(date) && checkMonth(date) && checkYear(date) && checkDateFormat(date);
}

function checkDate() {
  const date = document.getElementById('date');
  
  if(!compareCheckDate(date.value)) {
    alert(dateError);
    date.value = '';
    dateError = [];
  }
}

const outDate = document.getElementById('date');

outDate.addEventListener('change', checkDate);
