import React from 'react';
import './ProductDetail.css';
// import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Product from '../Product/Product';
import fakeData from '../../fakeData/products.js';

const ProductDetail = () => {
    const {productKey} = useParams()

    const myfakeData = fakeData.slice(0, 10);

    const product = myfakeData.find(pd => pd.key === productKey);


    return (
        <div>
        <h1 className='product-details'>Product Details :</h1>
        <Product showAddToCart = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;