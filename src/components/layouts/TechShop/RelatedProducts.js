import React from 'react';
import './RelatedProducts.css';

function RelatedProducts() {
  const relatedProducts = [
    { id: 1, name: 'boAt Rockerz 518', price: '₹1,299', image: 'path/to/rockerz518.jpg' },
    { id: 2, name: 'boAt Rockerz 410', price: '₹1,599', image: 'path/to/rockerz410.jpg' },
    { id: 3, name: 'Sony WH-XB910N', price: '₹13,489', image: 'path/to/sonyxb910.jpg' },
  ];

  return (
    <div className="related-products">
      <h3>Related Products</h3>
      <div className="products-list">
        {relatedProducts.map((product) => (
          <div key={product.id} className="related-product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
