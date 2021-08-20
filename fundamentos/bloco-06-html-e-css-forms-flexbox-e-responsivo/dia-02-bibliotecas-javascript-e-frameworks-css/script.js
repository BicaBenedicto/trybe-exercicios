const states = {
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


function checkFormValue() {
  const formReply = {
    'Nome: '            : document.getElementById('name').value,
    'E-mail: '          : document.getElementById('email').value,
    'CPF: '             : document.getElementById('cpf').value,
    'Endereco: '        : document.getElementById('endereco').value,
    'Cidade: '          : document.getElementById('city').value,
    'Estado: '          : document.getElementById('estado').value,
    'Resumo currículo: ': document.getElementById('resume-curriculum').value,
    'Cargo: '           : document.getElementById('cargo').value,
    'Descrição cargo: ' : document.getElementById('desc-cargo').value,
    'Data de inicio: '  : document.getElementById('datepicker').value,
  };
  let output = 0;
  
  for (let index in formReply) {
    if (formReply[index]) {
      output += 0;
    } else {
      output += 1;
    }
  }
  return output === 0;
}
function sendSections(block) {
  const tipo = document.getElementsByClassName('tipo');
  let type = '';
  for (let index = 0; index < tipo.length; index += 1) {
    if (tipo[index].checked) {
      type = tipo[index].value;
    }
  }
  const formReply = {
    'Nome: '            : document.getElementById('name').value,
    'E-mail: '          : document.getElementById('email').value,
    'CPF: '             : document.getElementById('cpf').value,
    'Endereco: '        : document.getElementById('endereco').value,
    'Cidade: '          : document.getElementById('city').value,
    'Estado: '          : document.getElementById('estado').value,
    'Tipo: '            : type,
    'Resumo currículo: ': document.getElementById('resume-curriculum').value,
    'Cargo: '           : document.getElementById('cargo').value,
    'Descrição cargo: ' : document.getElementById('desc-cargo').value,
    'Data de inicio: '  : document.getElementById('datepicker').value,
  };

  for (let item in formReply) {
    const p = document.createElement('p');

    p.innerHTML = '<b>' + item + '</b>' + formReply[item];
    block.appendChild(p);
  }
}

function createDivElement() {
  const formComplete = document.getElementById('form-complete');
  if (checkFormValue()) {
    const divImprimir = document.createElement('div');
    divImprimir.id = 'reply';
    formComplete.appendChild(divImprimir);
    sendSections(divImprimir);
  } else {
    const divImprimir = document.createElement('div');
    divImprimir.id = 'reply';
    divImprimir.innerText = 'Preencha todos os campos antes de enviar!';
    formComplete.appendChild(divImprimir);
  }
}

function sendCurriculum(event) {
  const divReply = document.getElementById('reply');
  event.preventDefault();

  if (!divReply) {
    createDivElement();
  } else {
    divReply.remove();
    createDivElement();
  }
}

const buttonSend = document.getElementById('button-submit');
buttonSend.addEventListener('click', sendCurriculum);

function clearInputs() {
  document.location.reload();
}

const buttonClear = document.getElementById('clear-form');
buttonClear.addEventListener('click', clearInputs);
