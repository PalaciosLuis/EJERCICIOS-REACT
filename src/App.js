import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*componente propio*/}
        {/* <Greeting name="Luis palacios"></Greeting> */}
        <GreetingF name={"lUIS 2 EN FUNCION"}></GreetingF>
      </header>
    </div>
  );
  
}

export default App;
