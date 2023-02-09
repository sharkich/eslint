import React from 'react';

import logo from './logo.svg';
import './App.css';

const x = {
  a: 1,
  b: 2,
  d: 'd'
};

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1>{x.a}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" rel="noopener noreferrer" target="_blank">
          Learn React
        </a>
      </header>
    </div>
  );
}
