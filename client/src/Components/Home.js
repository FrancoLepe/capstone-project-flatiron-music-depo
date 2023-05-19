import React from 'react'
import logo from '../images/transparent-guitar-depo-logo copy-2.png';
import ProductList from './ProductList';

function Home({products}) {
    return(
    <div>

        <img src={logo} alt="music depo logo" />
        <h1>WELCOME TO MUSIC DEPO!</h1>
           
            <ProductList products={products}/>
    </div>    
    )
}

export default Home 