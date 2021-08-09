import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './First';

function App() {
  const name = < h1 > balu</h1>;
  return (
    <div className="App">
      {name}
      <First></First>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>balu is src/App.js</code> and save to reload.
        </p>
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
