import React, { Component } from 'react';

const productDetails = {
  1: { name: 'Stone and Beam Westview', description: 'Comfortable and stylish sofa.', price: '$500' },
  2: { name: 'Rivet Bigelow Modern', description: 'Modern and elegant sofa.', price: '$450' },
  3: { name: 'Amazon Brand Modern Sofa', description: 'Affordable and modern.', price: '$400' },
};

class SingleProductPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const product = productDetails[id];

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default SingleProductPage;
