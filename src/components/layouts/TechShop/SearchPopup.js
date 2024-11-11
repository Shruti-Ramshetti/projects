import React, { useState } from 'react';
import './SearchPopup.css';

const products = ["Apple", "Banana", "Camera", "Drone", "Earphones"];

function SearchPopup() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="popup search-popup">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPopup;
