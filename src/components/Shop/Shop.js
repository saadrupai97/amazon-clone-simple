import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart'

const Shop = () => {

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 10)))
    }, [])
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        console.log('Product Added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div>
            {/* <h1>This is a shop</h1>
            <h3>This shop contains : {products.length}</h3> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product 
                            handleAddProduct={handleAddProduct} 
                            product={product}>
                            </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;