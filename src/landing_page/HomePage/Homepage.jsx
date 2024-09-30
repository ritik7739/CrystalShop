import React from 'react';
import Welcome from '../welcome/welcome';
import Products from '../products/products';
import Price from '../best_price/price';
import Footer from '../footer/footer';

function Homepage() {
    return ( 
        <>
        <Welcome/>
        <Products/>
        <Price/>
        <Footer/>
        </>
     );
}

export default Homepage;