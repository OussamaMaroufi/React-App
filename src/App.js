import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <h1 style ={{color:"green"}}>Welcome !</h1>
        <p>some text here</p>
        <p style={{color:"red"}}>Hello World</p>
        </a>
      </header>
    </div>
  );
}

export default App;
