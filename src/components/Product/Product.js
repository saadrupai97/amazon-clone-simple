import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';
// import {Button} from 'react-bootstrap';

const Product = (props) => {
    const { img, name, seller, key, price, stock } = props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-details-name'><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                <br></br>
                <p><small>${price}</small></p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                {props.showAddToCart && <button  onClick={() => props.handleAddProduct(props.product)} className='product-details-button'><FontAwesomeIcon className='product-details-icon' icon={faShoppingCart} />add to cart</button>}
                {/* <Button className='btn-success'>Click Me</Button> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        {name}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}
            </div>
        </div>
    );
};

export default Product;