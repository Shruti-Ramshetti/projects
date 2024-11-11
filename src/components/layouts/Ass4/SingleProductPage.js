import React, { Component } from 'react';
import './SingleProductPage.css';

const productDetails = {
  1: { name: 'Stone and Beam Westview', description: 'A comfortable and stylish sofa.' },
  2: { name: 'Rivet Bigelow Modern', description: 'A modern sofa with clean lines.' },
  3: { name: 'Amazon Brand Modern Sofa', description: 'Affordable and comfortable.' },
};

class SingleProductPage extends Component {
  render() {
    const { id } = this.props.match.params;
    const product = productDetails[id];

    return (
      <div className="single-product">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default SingleProductPage;
