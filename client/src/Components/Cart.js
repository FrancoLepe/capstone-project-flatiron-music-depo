import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";


function Cart({addToCart, currentCustomer, myCartItems, checkInProduct}) {
  
 

    return (
        <div>
          <h1>hello Cart</h1>
          <ProductList 
          addToCart={addToCart} cart={true} currentCustomer={currentCustomer} products={myCartItems} checkInProduct={checkInProduct}/>
          <div></div>
        </div>
  );
}
export default Cart;