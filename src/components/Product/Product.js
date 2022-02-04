import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-details-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <br></br>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className='product-details-button'><FontAwesomeIcon className='product-details-icon' icon={faShoppingCart}/>add to cart</button>
            </div>
        </div>
    );
};

export default Product;