import React, { useEffect } from "react";
import logo from './logo.svg';
import styles from './App.module.scss';
import { UIStore } from "./store/Store";
import Name from './components/NameComponent/NameComponent';

function App() {
  const name = UIStore.useState(s => s.name)
  const darkmodeClass = UIStore.useState(s => s.darkmode) ? '' : styles.light
  const darkmode = UIStore.useState(s => s.darkmode);

  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {    
    document.title = name.length == 0 ? "Pullstate-react" : `Pullstate: ${name}`;
  }, [name]); //With an array, effect only runs when the referenced value(s) changes

  const nameChangeHandler = (e) => {
    UIStore.update(s => { s.name = e.target.value })
  };

  return (
    <div className={styles.App + ' ' + darkmodeClass}>
      <header className={styles['App-Header']}>
        <img src={logo} className={styles['App-logo']} alt="logo" />
        <p>
          Enter your name below:
        </p>
        {name.length > 0 ? <Name name={name} /> : null}

        <input type="text" value={name} onChange={(e) => nameChangeHandler(e)} />
      </header>
      <input type="checkbox" id="chkMode" name="chkMode" defaultChecked={darkmode} onChange={(e) => UIStore.update(s => { s.darkmode = !darkmode })} /><label htmlFor="chkMode">Dark mode</label>
    </div>
  );
}

export default App;
