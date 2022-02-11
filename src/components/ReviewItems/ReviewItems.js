import React from 'react';
import './ReviewItems.css'

const ReviewItems = (props) => {
    const {name, quantity, key} = props.product;

    const reviewItemsStyle = {
        borderBottom: '1px solid grey',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewItemsStyle}>
            <h4 className="product-details-name">{name}</h4>
            <h6>Quantity: {quantity}</h6>
            <br />
            <button onClick={() => props.removeProduct(key)} className='product-details-button'>Remove</button>
        </div>
    );
};

export default ReviewItems;