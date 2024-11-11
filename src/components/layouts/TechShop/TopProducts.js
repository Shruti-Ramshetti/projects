import products from '../TechShop/data/productData';
import './TopProducts.css';
import React, { useState } from 'react';
import ProductList from './ProductList';



const TopProducts = () => {
  const [filter, setFilter] = useState('All');



  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredProducts = products.filter(
    (product) => filter === 'All' || product.category === filter
  );

  return (
    <div className="product-page">
      <h1 style={{marginBottom:"90px",marginTop:"90px"}}>Top Products</h1>
      <div className="filter-buttons">
        {['All', 'Headphones', 'Earbuds', 'Earphones', 'Neckbands'].map((category) => (
          <button
            key={category}
            className={filter === category ? 'active' : ''}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default TopProducts;


