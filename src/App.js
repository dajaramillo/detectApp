import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre, edad){
  var presentacion = <div>
    <h1>Hola, soy {nombre}</h1>
    <h2>Tengo {edad}</h2>
  </div>
  
  return presentacion;
}

function App() {
  var nombre = "Daniel";
  var edad = 12;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es el encabezado de React
        </p>
        {HolaMundo(nombre, edad)}
        {HolaMundo("Nombre", "edad")}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
