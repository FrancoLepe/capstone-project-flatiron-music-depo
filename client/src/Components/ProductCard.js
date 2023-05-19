import React from 'react';




function ProductCard({product}) {

    // const productCardsArray = products.map(productObj => {
    //     return <ProductCard product={productObj}/>
    // })
  return(
    <div>
        {product.name}
        {product.brand}
        {product.description}
        ${product.price}
        <img src={product.image} alt={product.name}/>

    </div>

  )

  }

export default ProductCard