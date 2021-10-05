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
  return (<ul key={object.conteudo} className='card'>
    <li>O conteúdo é: {object.conteudo}</li>
    <li>Status: {object.bloco}</li>
    <li>Bloco: {object.status}</li>
    <br />
    </ul>);
}

class Content extends React.Component {
  render () {
    return conteudos.map((element) => contents(element))
  }
}

export default Content;