import React from 'react'
import ProductCard from './ProductCard.js'



function ProductList({products}) {

    const productCardsArray = products.map(productObj => {
        return <ProductCard product={productObj}/>
    })


    return (
        <div>
            <section className="mb-20">
                <div className="container mx-auto ">
                    <div>{productCardsArray}</div>
                </div>
            </section>
        </div>
    )
}

export default ProductList;