import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const contents = (object) => {
  return [<p>O conteúdo é: {object.conteudo}</p> ,<p>Status: {object.bloco}</p>, <p>Bloco: {object.status}</p>,<br />]
}

class Content extends React.Component {
  render () {
    return conteudos.map((element) => contents(element))
  }
}

export default Content;