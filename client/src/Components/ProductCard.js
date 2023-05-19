import React from 'react';




function ProductCard({product}) {

    // const productCardsArray = products.map(productObj => {
    //     return <ProductCard product={productObj}/>
    // })
  return(
    <div>
      <br />
        <div><b>Product</b>{product.name}</div>
        <div><b>Brand</b>{product.brand}/</div>
        <div><b>description</b>{product.description}</div>
        <div><b>price</b> ${product.price}</div>
        
        <img src={product.image} alt={product.name}/>
      <br />
    </div>

  )

  }

export default ProductCard


//<div><b>Title:</b> {book.title}</div>