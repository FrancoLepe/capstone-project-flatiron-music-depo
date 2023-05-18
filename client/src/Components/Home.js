import React from 'react'
import logo from '../images/transparent-guitar-depo-logo copy-2.png';
import ProductList from './ProductList';

function Home({products}) {
    return(
    <div>

        <img src={logo} alt="music depo logo" />
        <p>WELCOME TO MUSIC DEPO!</p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
             >
              Learn React
            </a>
            <ProductList products={products}/>
    </div>    
    )
}

export default Home 