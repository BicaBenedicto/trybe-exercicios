import './node_modules/just-validate/dist/js/just-validate.min.js'

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

    const divImprimir = document.createElement('div');
    divImprimir.id = 'reply';
    formComplete.appendChild(divImprimir);
    sendSections(divImprimir);
}

function sendCurriculum(event) {
  const divReply = document.getElementById('reply');
  event.preventDefault();
  
  if(JustValidate) {
  if (!divReply) {
    createDivElement();
  } else {
    divReply.remove();
    createDivElement();
  }
}
}

const buttonSend = document.getElementById('button-submit');


function clearInputs() {
  document.location.reload();
  
}

const buttonClear = document.getElementById('clear-form');
buttonClear.addEventListener('click', clearInputs);

window.onload = function () {
  selectStates();
  new window.JustValidate('.js-form', {
    rules: {
      name: {
        required: true,
        minLength: 3,
        maxLength: 40
      },
      email: {
        required: true,
        email: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      },
      address: {
        required: true,
        maxLength: 200
      },
      city: {
        required: true,
        maxLength: 28
      },
      state: {
        required: true,
      },
      radio: {
        required: true,
      },
      text: {
        required: true,
        maxLength: 1000
      },
      position: {
        required: true,
        maxLength: 40
      },
      description: {
        required: true,
        maxLength: 500
      },
      date: {
        required: true,
      }
    },
    messages: {
      name: {
        required: 'O campo de nome é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      email: {
        required: 'O campo de email é obrigatório.',
        email: 'O email digitado não é válido.',
        maxLength: 'O limite é de 50 caracteres.'
      },
      cpf: {
        required: 'O campo de CPF é obrigatório.',
        maxLength: 'O limite é de 11 caracteres.'
      },
      address: {
        required: 'O campo endereço é obrigatório.',
        maxLength: 'O limite é de 200 caracteres.'
      },
      city: {
        required: 'O campo cidade é obrigatório.',
        maxLength: 'O limite é de 28 caracteres.'
      },
      state: {
        required: 'O campo estado é obrigatório.',
      },
      radio: {
        required: 'A escolha de um item é obrigatória.',
      },
      text: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 1000 caracteres.'
      },
      position: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 40 caracteres.'
      },
      description: {
        required: 'Este campo é obrigatório.',
        maxLength: 'O limite é de 500 caracteres.'
      },
      date: {
        required: 'Este campo é obrigatório.',
      }
    },
    submitHandler: function () {
      buttonSend.addEventListener('click', sendCurriculum);
    }});
}
