import React from 'react';
import './ProductCard.css';
import products from '../TechShop/data/productData';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.heroImage} alt={product.name} />
            <h4>{product.title}</h4>
            <p>{product.info}</p>
            <hr/>
            <p>₹{product.finalPrice} <span className="original-price">₹{product.originalPrice}</span></p>
            <button className="add-to-cart">Add to cart</button>
        </div>
    );
};

export default ProductCard;
