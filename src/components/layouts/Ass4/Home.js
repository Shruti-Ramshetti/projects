import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import productImg01 from "../Ass4/images/double-sofa-01.png";
import productImg02 from "../Ass4/images/double-sofa-02.png";
import productImg03 from "../Ass4/images/double-sofa-03.png";
import productImg04 from "../Ass4/images/single-sofa-01.jpg";
import productImg05 from "../Ass4/images/single-sofa-02.jpg";
import productImg06 from "../Ass4/images/single-sofa-03.jpg";
import productImg07 from "../Ass4/images/single-sofa-04.png";
import productImg08 from "../Ass4/images/arm-chair-01.jpg";
import productImg09 from "../Ass4/images/arm-chair-02.jpg";
import productImg10 from "../Ass4/images/arm-chair-03.jpg";
import productImg11 from "../Ass4/images/phone-01.jpg";
import productImg12 from "../Ass4/images/phone-02.jpg";
import productImg13 from "../Ass4/images/phone-03.png";
import productImg14 from "../Ass4/images/phone-04.jpg";
import productImg15 from "../Ass4/images/phone-05.jpg";
import productImg16 from "../Ass4/images/phone-06.jpg";
import productImg17 from "../Ass4/images/phone-08.png";
import productImg18 from "../Ass4/images/watch-01.jpg";
import productImg19 from "../Ass4/images/watch-02.jpg";
import productImg20 from "../Ass4/images/watch-03.jpg";
import productImg21 from "../Ass4/images/watch-04.jpg";
import productImg22 from "../Ass4/images/watch-05.png";
import productImg23 from "../Ass4/images/watch-06.png";
import productImg24 from "../Ass4/images/watch-07.png";
import productImg25 from "../Ass4/images/wireless-01.png";
import productImg26 from "../Ass4/images/wireless-02.png";
import productImg27 from "../Ass4/images/wireless-03.png";
import productImg28 from "../Ass4/images/wireless-04.png";

const products = [
  { id: 1, name: 'Stone and Beam Westview', img: productImg01},
  { id: 2, name: 'Rivet Bigelow Modern', img: productImg02},
  { id: 3, name: 'Amazon Brand Modern Sofa', img: productImg03 },
  { id: 4, name: 'Amazon Brand Modern Sofa', img: productImg04 },
  { id: 5, name: 'Amazon Brand Modern Sofa', img: productImg05 },
  { id: 6, name: 'Amazon Brand Modern Sofa', img: productImg06 },
  { id: 7, name: 'Amazon Brand Modern Sofa', img: productImg07 },
  { id: 8, name: 'Amazon Brand Modern Sofa', img: productImg08 },
  { id: 9, name: 'Amazon Brand Modern Sofa', img: productImg09 },
  { id: 10, name: 'Amazon Brand Modern Sofa', img: productImg10 },
  { id: 11, name: 'Amazon Brand Modern Sofa', img: productImg11 },
  { id: 12, name: 'Amazon Brand Modern Sofa', img: productImg12 },
  { id: 13, name: 'Amazon Brand Modern Sofa', img: productImg13 },
  { id: 14, name: 'Amazon Brand Modern Sofa', img: productImg14 },
  { id: 15, name: 'Amazon Brand Modern Sofa', img: productImg15 },
  { id: 16, name: 'Amazon Brand Modern Sofa', img: productImg16 },
  { id: 17, name: 'Amazon Brand Modern Sofa', img: productImg17 },
  { id: 18, name: 'Amazon Brand Modern Sofa', img: productImg18 },
  { id: 19, name: 'Amazon Brand Modern Sofa', img: productImg19 },
  { id: 20, name: 'Amazon Brand Modern Sofa', img: productImg20 },
  { id: 21, name: 'Amazon Brand Modern Sofa', img: productImg21 },
  { id: 22, name: 'Amazon Brand Modern Sofa', img: productImg22 },
  { id: 23, name: 'Amazon Brand Modern Sofa', img: productImg23 },
  { id: 24, name: 'Amazon Brand Modern Sofa', img: productImg24 },
  { id: 25, name: 'Amazon Brand Modern Sofa', img: productImg25 },
  { id: 26, name: 'Amazon Brand Modern Sofa', img: productImg26 },
  { id: 27, name: 'Amazon Brand Modern Sofa', img: productImg27 },
  { id: 28, name: 'Amazon Brand Modern Sofa', img: productImg28 },

];

class Home extends Component {
  render() {
    return (
      <div className="catalog">
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <img src={product.img} alt={product.name} />
                <Link to={`/product/${product.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
