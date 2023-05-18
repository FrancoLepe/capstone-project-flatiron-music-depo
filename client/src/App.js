import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import './App.css';
import API_URL from "./apiConfig.js";
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
      <Navbar/>
       
             
                <Routes>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account />}/>
                <Route path="/" element={<Home products={products} />}/>
                </Routes>
             
    </div>
  );
}

export default App;


