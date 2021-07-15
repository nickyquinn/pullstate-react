import logo from './logo.svg';
import styles from './App.module.scss';
import { UIStore } from "./store/Store";
import React from "react";

function App() {
  const name = UIStore.useState(s => s.name)

  return (
    <div className={styles.App}>
      <header className={styles['App-Header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles['App-Link']}
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
