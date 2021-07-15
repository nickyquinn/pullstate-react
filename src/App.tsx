import logo from './logo.svg';
import './App.scss';
import { UIStore } from "./store/Store";


function App() {
  const name = UIStore.useState(s => s.name)

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
          Learn React
        </a>
        {name.length > 0 ? <div>Hi, {name}</div> : null}

        <input type="text" value={name} onChange={(e) => UIStore.update(s => { s.name = e.target.value })} />
      </header>
    </div>
  );
}

export default App;
