import React, { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/products.js';
import { addToDb} from '../../utilities/fakedb';

const Shop = () => {
    const myfakeData = fakeData.slice(0, 10);

    const [cart, setCart] = useState([])


    const handleAddProduct = (product) => {
        // console.log('Product Added',product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count = sameProduct.length;
        addToDb(product.key);
    }

    return (
        <div>
            {/* <h1>This is a shop</h1>
            <h3>This shop contains : {products.length}</h3> */}
            <div className="shop-container">
                <div className="product-container">
                    {
                        myfakeData.map(product => <Product
                            key={product.key}
                            showAddToCart={true}
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