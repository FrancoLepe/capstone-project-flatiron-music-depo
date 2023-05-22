import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Routes, Route, useNavigate} from "react-router-dom";
import Account from "./components/Account";
import './App.css';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';

function App() {

  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [products, setProducts]= useState([])
  const [currentForm, setCurrentForm] = useState('login')
  const [currentCustomer, setCurrentCustomer] = useState('')
  const [cartItems, setCartIems]= useState([])

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


  function deleteAccount() {
    const confirmBox = window.confirm(
        `Do you really want to delete user: ${currentCustomer.firstname} ${currentCustomer.lastname}?`
    )
    if (confirmBox === true) {
        // mybooks.map(book => checkInBook(book))
        fetch(`http://127.0.0.1:5555/customers/${currentCustomer.id}`,
            { method: 'DELETE', })
            .then(() => handleLogout())
    }
}


function addToCart(product) {
 
  const updatedCart = products.map(productObj => {
    
    if ((productObj.id) === (product.product_id)) {
      productObj.checkout_carts = true;
      productObj.product_id = product.id;
      productObj.customer_id = product.customer_id;
      
      return productObj;
    } else {
      return productObj;
    }
  });
  setProducts(updatedCart);
}





function checkInProduct(product) {
  const updatedproducts = product.map(productObj => {
    if ((productObj.id) === (product.id)) {
      productObj.checkout_cart = false;
      productObj.product_id = null;
      productObj.customer_id = null;
      
      return productObj;
    } else {
      return productObj;
    }
  });
  setProducts(updatedproducts);
}
 console.log(currentCustomer)




 const myProducts = products.filter(productObj => productObj.customer_id === currentCustomer.id)

  return (
    <div className="App">
      <Navbar currentCustomer={currentCustomer}/>
       
       
      
             
                <Routes>
                <Route path="/cart" element={<Cart addToCart={addToCart} cartItems={cartItems} myCartItems={myProducts} checkInProduct={checkInProduct}/>}/>
                <Route path="/account" element={<Account currentCustomer={currentCustomer} setCurrentCustomer={setCurrentCustomer} onLogout={handleLogout} onDeleteAccount={deleteAccount}/>}/>
                <Route path="/" element={<Home currentCustomer={currentCustomer}  addToCart={addToCart} products={products} />}/>
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