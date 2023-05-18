import React from 'react';
import{ BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Account } from "./Components/Account";


import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
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
        </nav>
      </div>
    </Router>
  );
}

export default App;
