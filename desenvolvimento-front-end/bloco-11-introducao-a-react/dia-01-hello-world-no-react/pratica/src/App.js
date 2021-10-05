import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Task = (value) => {
  return (
    <li className='card'>{value}</li>
  );
}

const compromissos = ['Acordar', 'Café da manhã', 'Anime', 'Estudar', 'Trybe', 'Descansar', 'Trabalhar', 'Dormir'];

const listTasks = compromissos.map(value => Task(value));

function App() {
  return (
    [<Header />, listTasks, <Content />, <Footer />]
  );
}

export default App;
