import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
import fakeData from '../../fakeData/products.js';
import { addToDb } from '../../utilities/fakedb';
import { getDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const myfakeData = fakeData.slice(0, 10);

    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDb();
        const newSavedCart = JSON.parse(savedCart);
        if (newSavedCart !== null) {
            const productKeys = Object.keys(newSavedCart);
            const prevCart = productKeys.map(pdKey => {
                const product = fakeData.find(pd => pd.key === pdKey);
                product.quantity = newSavedCart[pdKey];
                // deleteFromDb(key) 
                return product;
            })
            setCart(prevCart);
        }
        else{
            setCart([]);
        }


    }, [])


    const handleAddProduct = (product) => {
        const productToAdd = product.key;
        const sameProduct = cart.find(pd => pd.key === productToAdd)
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== productToAdd)
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        // console.log('Product Added',product);
        // const newCart = [...cart, product];
        setCart(newCart);
        // const sameProduct = newCart.filter(pd => pd.key === product.key)
        // const count = sameProduct.length;
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
                    <Cart cart={cart}>
                        <Link to='/order-review'><button className='product-details-button'>Review Order</button></Link>
                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default Shop;