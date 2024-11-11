import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../TechShop/images/products/boat131-3.png';
import image2 from '../TechShop/images/products/sonyXb910n-1.png';
import image3 from '../TechShop/images/products/jbl660nc-1.png';

const ProductSlider = ({ onProductSelect }) => {
  const products = [
    {
        id: 1,
        name: 'boAt Airdopes 131',
        description: 'Featherweight For Comfort All-Day.',
        price: 1099,
        originalPrice: 2990,
        image: image1,
    },
    {
        id: 2,
        name: 'Sony WH-XB91ON',
        description: 'Give Your Favourite Music A Boost .',
        price: 13489,
        originalPrice: 19990,
        image: image2,
    },
    {
        id: 3,
        name: 'JBL Live 660NC',
        description: 'Keep The Noise Out, Or  In.You Choose.',
        price: 9999,
        originalPrice: 14999,
        image: image3,
    },

  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map((product,index) => (
          <div key={index} className="slide">
            <div className="product-content">
              <h1>{product.name}</h1>
              <p className="description">{product.description}</p>
              <p className="price">₹{product.price} <span className="original-price">₹{product.originalPrice}</span></p>
              
              <button onClick={() => onProductSelect(product)} className="shop-now">Shop Now</button>
            </div>
            <div className="product-image">
              <img onClick={() => onProductSelect(product)} src={product.image} alt={product.name} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
