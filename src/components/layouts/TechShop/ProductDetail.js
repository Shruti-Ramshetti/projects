import React, { useState } from 'react';
import RelatedProducts from './RelatedProducts';
import './ProductDetail.css';

function ProductDetail() {
  const [tab, setTab] = useState('specifications');

  const handleTabClick = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="product-detail">
      <div className="product-main">
        <img
          src="path/to/headphone-image.jpg" 
          alt="JBL Live 660NC"
          className="product-image"
        />
        <div className="product-info">
          <h2>JBL Live 660NC</h2>
          <p>Wireless Over-Ear NC Headphones</p>
          <div className="price">
            <span className="current-price">₹9,999</span>
            <span className="original-price">₹14,999</span>
            <span className="discount">Save ₹5,000 (33%)</span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="product-tabs">
        <button onClick={() => handleTabClick('specifications')} className={tab === 'specifications' ? 'active' : ''}>Specifications</button>
        <button onClick={() => handleTabClick('overview')} className={tab === 'overview' ? 'active' : ''}>Overview</button>
        <button onClick={() => handleTabClick('reviews')} className={tab === 'reviews' ? 'active' : ''}>Reviews</button>
      </div>

      <div className="tab-content">
        {tab === 'specifications' && (
          <div className="specifications">
            <p><strong>Brand:</strong> JBL</p>
            <p><strong>Model:</strong> JBL Live 660NC</p>
            <p><strong>Type:</strong> Over Ear</p>
            <p><strong>Connectivity:</strong> Wireless</p>
            <p><strong>Microphone:</strong> Yes</p>
          </div>
        )}
        {tab === 'overview' && (
          <div className="overview">
            <p>The JBL Live 660NC headphones feature noise cancellation and wireless connectivity, providing a high-quality audio experience.</p>
          </div>
        )}
        {tab === 'reviews' && (
          <div className="reviews">
            <p>Reviews will be displayed here.</p>
          </div>
        )}
      </div>

      <RelatedProducts />
    </div>
  );
}

export default ProductDetail;
