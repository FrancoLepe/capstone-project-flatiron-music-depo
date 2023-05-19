import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import './App.css';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {

  const [customers, setCustomers] = useState([]);
  const [products, setProducts]= useState([])
  const [currentForm, setCurrentForm] = useState('login')

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

  // useEffect(() => {
  //   fetch(`${API_URL}/check_session`, { credentials: 'include' })
  //     .then((response) => {
  //       if (response.ok) {
  //         response.json()
  //           .then((customer) => {
  //             setCurrentUser(customer)
  //           });
  //       }
  //     });
  // }, []);

 

  return (
    <div className="App">
      <Navbar />
       
       
       
             
                <Routes>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account />}/>
                <Route path="/" element={<Home products={products} />}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/createaccount" element={<CreateAccount/>}/>
                </Routes>
             
    </div>
  );
}

export default App;


// {
//   currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <CreateAccount onFormSwitch={toggleForm}/>
// }