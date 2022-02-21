import logo from './logo.svg';
import './App.css';
import Component from './Component'

function App() {
  // const number =1
  // const string='test'
  const number = 1098123

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Component string="Hello World!" number={number}/>
        {/* <p>
          {string + number}
          </p> */}
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
