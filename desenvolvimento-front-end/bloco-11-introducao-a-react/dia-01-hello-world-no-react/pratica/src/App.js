import './App.css';
import Header from './Header';
import Content from './Content'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Acordar', 'Café da manhã', 'Anime', 'Estudar', 'Trybe', 'Descansar', 'Trabalhar', 'Dormir'];

const listTasks = compromissos.map(value => Task(value));

function App() {
  return (
    <Content />
  );
}

export default App;
