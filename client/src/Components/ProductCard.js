import React from 'react';
// import './ProductCard.css';



function ProductCard({product, addToCart, currentCustomer, checkInProduct }) {

 
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
                addToCart(r)
            })
    }

    function handleRemoveFromCart() {
      
      const removeItem = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
      }
      fetch(`http://127.0.0.1:5555/checkoutcartsbyid/${product.id}`, removeItem)
          .then(checkInProduct(product))
  }

  
 console.log(product)

  
  return(
    <div className="card">
      <br />
        <div><b>Product</b>{product.name}</div>
        <div><b>Brand</b>{product.brand}/</div>
        <div><b>description</b>{product.description}</div>
        <div><b>price</b> ${product.price}</div>
        <br></br>
        <div><button  onClick={handleAddToCart} >Add to cart</button></div>
        <div><button onClick={handleRemoveFromCart} >Remove item</button></div>
        <br></br>
        <img style={{ maxWidth: "100%", width: "auto", height: "200px" }} src={product.image} alt={product.name} />
        <div className="container">
      <br />
     </div>
    </div>

  )

  }

export default ProductCard


//<div><b>Title:</b> {book.title}</div>