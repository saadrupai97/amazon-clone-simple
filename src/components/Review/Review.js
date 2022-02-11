import React from 'react';
import './Review.css';
import { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.js';
import { getDb, deleteFromDb, clearTheCart } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../Cart/Cart';
import Image from '../../images/giphy.gif';

const Review = () => {

    const [cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        setOrderPlaced(true);
        clearTheCart();
    }

    

    const myfakeData = fakeData.slice(0, 10);

    useEffect(() => {
        //cart 
        const savedCart = getDb();
        const newSavedCart = JSON.parse(savedCart);
        const productKeys = Object.keys(newSavedCart);
        const cartProducts = productKeys.map(key => {
            const product = myfakeData.find(pd => pd.key === key);
            product.quantity = newSavedCart[key];
            // deleteFromDb(key) 
            return product;
        }, []);
        setCart(cartProducts);
    }, []);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey);
    }

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={Image} alt="" />;
    }

    return (
        <div className='item-container'>
            <div className='product-container'>
                <h2 style={{ marginLeft: '100px' }}>Cart Items : {cart.length}</h2>
                {
                    cart.map(pd => <ReviewItems key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}>
                    </ReviewItems>)
                }
                {
                    thankYou
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='product-details-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;