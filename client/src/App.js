import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Account } from "./components/Account";
import './App.css';
import API_URL from "./apiConfig.js";
import logo from '/Users/francolepe/capstone-project-flatiron-music-depo/client/src/images/transparent-guitar-depo-logo copy-2.png';
import Login from './components/Login';

function App() {

  const [customers, setCustomers] = useState([]);
  const [products, setProducts]= useState([])

  useEffect(() => {
    fetch('http://localhost:5555/customers')
    .then((resp) => resp.json())
    .then((customerData) => setCustomers(customerData))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5555/products')
    .then((resp) => resp.json())
    .then((productData) => setProducts(productData))
  }, [])

  return (
    <div className="App">
      <nav>
        <img src={logo} alt="music depo logo" />
        <p>WELCOME TO MUSIC DEPO!</p>
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
  );
}

export default App;


