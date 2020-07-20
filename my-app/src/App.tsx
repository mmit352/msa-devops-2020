import React from 'react';
import logo from './logo_2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MSA 2020 DevOps!
        </p>
        <a
          className="App-link"
          href="https://nzmsa.netlify.app/"
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
