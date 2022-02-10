import React from 'react';
import './Review.css';
import { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.js';
import { getDb, deleteFromDb } from '../../utilities/fakedb';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {

    const [cart, setCart] = useState([])

    const myfakeData = fakeData.slice(0, 10);

    useEffect(() => {
        //cart 
        const savedCart = getDb();
        const newSavedCart = JSON.parse(savedCart);
        const productKeys = Object.keys(newSavedCart);
        const cartProducts = productKeys.map(key => {
            const product = myfakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            // deleteFromDb(key) 
            return product;
        }, []);
        setCart(cartProducts);

    }, []);
    return (
        <div>
            <h2>Cart Items : {cart.length}</h2>
            {
                cart.map(pd => <ReviewItems key={pd.key}
                                             product={pd}>
                                             </ReviewItems>)
            }
        </div>
    );
};

export default Review;