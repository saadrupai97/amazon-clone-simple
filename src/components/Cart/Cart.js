import React from 'react';
import './Cart.css'

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    // or manually
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total += product.price;
    // }

    //number formatter
    const formatNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    //fixing shipping cost
    let shippingCost = 0;
    if(total > 400){
        shippingCost = 0;
    }
    else if(total > 200){
        shippingCost = 19.99;
    }
    else if(total > 50){
        shippingCost = 12.99;
    }

    //tax counter
    let tax = (total/10);

    //for grand total
    let grandTotal = total + shippingCost + tax;


    
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <h4>Items Ordered: {cart.length}</h4>
            <h4>Item Details:</h4>
            <ul>
                {
                    cart.map(product => <li>{product.name}------- ${product.price}</li>)
                }
            </ul>
            <h4><small>Shipping Cost: <span className='cart-numbers'>{formatNumber(shippingCost)}</span></small></h4>
            <h4><small>Tax + Vat: <span className='cart-numbers'>{formatNumber(tax)}</span></small></h4>
            <h4>Total Price: <span className='cart-numbers'>{formatNumber(grandTotal)}</span></h4>
        </div>
    );
};

export default cart;