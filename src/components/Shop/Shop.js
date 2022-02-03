import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 10)))
    }, [])
    const [products, setProducts] = useState([])



    return (
        <div>
            {/* <h1>This is a shop</h1>
            <h3>This shop contains : {products.length}</h3> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <h3>This is a cart</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;