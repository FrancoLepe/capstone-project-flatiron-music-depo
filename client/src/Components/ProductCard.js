import React, { useRef } from 'react';
// import './ProductCard.css';
import clickSound from './Keyboard-click.mp3';

function ProductCard({ product, addToCart, currentCustomer, checkInProduct }) {
  const audioRef = useRef(null); // Declare the audioRef variable

  function handleAddToCart() {
    const requestCheckout = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_id: currentCustomer.id,
        product_id: product.id,
      })
    };

    fetch('http://127.0.0.1:5555/create_cart', requestCheckout)
      .then(r => r.json())
      .then(r => {
        addToCart(r);
        playClickSound(); // Play the click sound
      });
  }

  function handleRemoveFromCart() {
    const removeItem = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`http://127.0.0.1:5555/checkoutcartsbyid/${product.id}`, removeItem)
      .then(playClickSound())
      .then(checkInProduct(product));
       
  }

  function playClickSound() {
    audioRef.current.play();
  }

  console.log(product);

  return (
    <div className="card">
      <br />
      <div><b>Product </b>{product.name}</div>
      <div><b>Brand </b>{product.brand}/</div>
      <div><b>Description </b>{product.description}</div>
      <div><b>Price </b> ${product.price}</div>
      <br />
      <div><button onClick={handleAddToCart}>Add to cart</button></div>
      <div><button onClick={handleRemoveFromCart}>Remove item</button></div>
      <br />
      <img style={{ maxWidth: "100%", width: "auto", height: "180px" }} src={product.image} alt={product.name} />
      <div className="container">
        <br />
      </div>
      {/* Audio element for click sound */}
      <audio ref={audioRef}>
        <source src={clickSound} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default ProductCard;
