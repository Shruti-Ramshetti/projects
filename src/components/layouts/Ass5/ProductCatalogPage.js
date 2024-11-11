import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Stone and Beam Westview', price: '$500' },
  { id: 2, name: 'Rivet Bigelow Modern', price: '$450' },
  { id: 3, name: 'Amazon Brand Modern Sofa', price: '$400' },
];

class ProductCatalogPage extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Product Catalog</h2>
        <ul style={{ listStyleType: 'none' }}>
          {products.map((product) => (
            <li key={product.id} style={{ margin: '20px', textAlign: 'center' }}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductCatalogPage;
