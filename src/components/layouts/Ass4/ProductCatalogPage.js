import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductCatalogPage.css';

const products = [
  { id: 1, name: 'Stone and Beam Westview', price: '$500' },
  { id: 2, name: 'Rivet Bigelow Modern', price: '$450' },
  { id: 3, name: 'Amazon Brand Modern Sofa', price: '$400' },
];

class ProductCatalogPage extends Component {
  render() {
    return (
      <div className="catalog">
        <h2>Product Catalog</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="details-button">View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductCatalogPage;
