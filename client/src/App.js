import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route, useNavigate} from "react-router-dom";
import Account from "./components/Account";
import './App.css';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {

  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [products, setProducts]= useState([])
  const [currentForm, setCurrentForm] = useState('login')
  const [currentCustomer, setCurrentCustomer] = useState('')

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

  const handleLogin = (customer) => {
    setCurrentCustomer(customer)
  }

  useEffect(() => {
    fetch('http://localhost:5555/check_session', { credentials: 'include' })
      .then((response) => {
        if (response.ok) {
          response.json()
            .then((customer) => {
              setCurrentCustomer(customer)
            });
        }
      });
  }, []);

  function handleLogout() {
    fetch('http://127.0.0.1:5555/logout', {
      method: "DELETE",
      credentials: "include",
    })
      .then(setCurrentCustomer(''))
      .then(navigate("/"))
  }



 console.log(currentCustomer)

 

  return (
    <div className="App">
      <Navbar currentCustomer={currentCustomer}/>
       
       
       
             
                <Routes>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/account" element={<Account currentCustomer={currentCustomer} onLogout={handleLogout} />}/>
                <Route path="/" element={<Home products={products} />}/>
                <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
                <Route path="/createaccount" element={<CreateAccount currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer}/>}/>
                </Routes>
             
    </div>
  );
}

export default App;


// {
//   currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <CreateAccount onFormSwitch={toggleForm}/>
// }