import React from 'react';
import Slider from 'react-slick';
import ProductCard1 from './ProductCard1';
import products from '../TechShop/data/productData';
import './FeaturedProducts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../TechShop/images/products/boat131-3.png';
import image2 from '../TechShop/images/products/sonyXb910n-1.png';
import image3 from '../TechShop/images/products/jbl660nc-1.png';


const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'JBL Endurance Run Sports', price: 999, originalPrice: 1599, image: image1 },
    { id: 2, name: 'boAt Airdopes 203', price: 1074, originalPrice: 3999, image: image2 },
    { id: 3, name: 'boAt Rockerz 518', price: 1299, originalPrice: 3990, image: image3 },
    { id: 4, name: 'JBL Tune 760NC', price: 5999, originalPrice: 7999, image: image1 },
    { id: 5, name: 'boAt Rockerz 255', price: 899, originalPrice: 2999, image: image2 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="product-slider">
      <h1 style={{marginBottom:"90px"}}>Featured Products</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard1 key={product.id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;

