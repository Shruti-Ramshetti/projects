// src/ProductList.js

import React, { useState } from 'react';

const products = [
  // Electronics Category
  { id: 1, name: "Smartphone", image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=400", description: "High-end smartphone with 128GB storage.", category: "Electronics", offerPrice: 649, originalPrice: 699, inStock: true, quantityInStock: 50 },
  { id: 2, name: "Laptop", image: "https://example.com/images/laptop.jpg", description: "14-inch laptop with 16GB RAM.", category: "Electronics", offerPrice: 949, originalPrice: 999, inStock: true, quantityInStock: 30 },
  { id: 3, name: "Bluetooth Speaker", image: "https://example.com/images/bluetooth-speaker.jpg", description: "Portable Bluetooth speaker.", category: "Electronics", offerPrice: 129, originalPrice: 149, inStock: false, quantityInStock: 0 },
  { id: 4, name: "Smartwatch", image: "https://example.com/images/smartwatch.jpg", description: "Water-resistant smartwatch.", category: "Electronics", offerPrice: 179, originalPrice: 199, inStock: true, quantityInStock: 40 },
  { id: 5, name: "Wireless Earbuds", image: "https://example.com/images/wireless-earbuds.jpg", description: "Noise-cancelling earbuds.", category: "Electronics", offerPrice: 89, originalPrice: 99, inStock: true, quantityInStock: 60 },
  { id: 6, name: "4K TV", image: "https://example.com/images/4k-tv.jpg", description: "55-inch 4K Ultra HD TV.", category: "Electronics", offerPrice: 749, originalPrice: 799, inStock: false, quantityInStock: 0 },
  { id: 7, name: "Gaming Console", image: "https://example.com/images/gaming-console.jpg", description: "Next-gen gaming console.", category: "Electronics", offerPrice: 449, originalPrice: 499, inStock: true, quantityInStock: 25 },
  { id: 8, name: "Digital Camera", image: "https://example.com/images/digital-camera.jpg", description: "20MP camera with 4K video.", category: "Electronics", offerPrice: 549, originalPrice: 599, inStock: true, quantityInStock: 15 },
  { id: 9, name: "Tablet", image: "https://example.com/images/tablet.jpg", description: "10-inch tablet with LTE support.", category: "Electronics", offerPrice: 379, originalPrice: 399, inStock: false, quantityInStock: 0 },
  { id: 10, name: "VR Headset", image: "https://example.com/images/vr-headset.jpg", description: "Wireless VR headset.", category: "Electronics", offerPrice: 279, originalPrice: 299, inStock: true, quantityInStock: 12 },

  // Clothing Category
  { id: 11, name: "T-shirt", image: "https://example.com/images/tshirt.jpg", description: "100% cotton T-shirt.", category: "Clothing", offerPrice: 20, originalPrice: 25, inStock: true, quantityInStock: 100 },
  { id: 12, name: "Jeans", image: "https://example.com/images/jeans.jpg", description: "Slim-fit jeans.", category: "Clothing", offerPrice: 50, originalPrice: 60, inStock: true, quantityInStock: 80 },
  // Add more Clothing and Accessories products here...
];

function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              margin: '10px',
              padding: '10px',
              width: '200px',
              cursor: 'pointer',
            }}
            onClick={() => showProductDetails(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <p>
              Price: ${product.offerPrice} (Original: ${product.originalPrice})
            </p>
            <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2>{selectedProduct.name}</h2>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
          />
          <p>{selectedProduct.description}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>
            Price: ${selectedProduct.offerPrice} (Original: $
            {selectedProduct.originalPrice})
          </p>
          <p>
            Stock Status: {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <p>Quantity Available: {selectedProduct.quantityInStock}</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
