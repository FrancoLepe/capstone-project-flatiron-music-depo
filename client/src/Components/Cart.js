import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";


function Cart({addToCart, currentCustomer, myCartItems, checkInProduct}) {
  
  const itemsPrice = myCartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 150 ? 25 : 15;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;


  
    return (
        <div>
          <h1>hello Cart</h1>
            <div>
                {myCartItems.length === 0 && <div>
               
                <p >Your Cart is Empty</p>
                <Link to={"/"}>
                    <button  >Browse Products</button>
                </Link>
            </div>}
           
            <div >
            {myCartItems.map((item) => (
                <div >
                <div key={item.id} >
                    <img src={item.image} alt={item.image}/>
                    <div >{item.name}</div>
                    <button onClick={() => addToCart(item)} id='add-one'>add +</button>
                    {/* <button onClick={() => onRemove(item)} id='remove-one'>remove -</button> */}
                <div id='cart-qty'>
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
                </div>
                </div>
            ))}
            <div>
            {myCartItems.length !== 0 && (
                <div >
                    <div >
                        <div id='total-price'> Product - </div>
                        <div id='total-dollar'>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div >
                        <div id='total-price'> Tax -</div>
                        <div id='total-dollar'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div >
                        <div id='total-price'> Shipping -</div>
                        <div id='total-dollar'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div >
                        <div id='total-total' > Total :</div>
                        <div id='total-dollar'>${totalPrice.toFixed(2)}</div>
                    </div>
                    <div > 
                    <form>
                        <button >Checkout</button>
                    </form>
                    </div>
                </div>
             )} </div>

          <ProductList 
          addToCart={addToCart} cart={true} currentCustomer={currentCustomer} products={myCartItems} checkInProduct={checkInProduct}/>
           </div>
          
        </div>
        </div>
  );
}
export default Cart;