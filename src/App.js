import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/task.list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componente propio*/}
        {/* <Greeting name="Luis palacios"></Greeting> */}
        {/* <GreetingF name={"lUIS 2 EN FUNCION"}></GreetingF> */}
        {/* --------------------------------------------------------------------------- */}
        {/* COMPONENTE DE LISTADO DE TAREAS */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
  
}

export default App;
