import React from 'react';
import './Advantages.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const advantages = [
    { icon: 'fa-shipping-fast', title: 'Express Delivery', description: 'Ships in 24 Hours' },
    { icon: 'fa-award', title: 'Brand Warranty', description: '100% Original products' },
    { icon: 'fa-gift', title: 'Exciting Deals', description: 'On all prepaid orders' },
    { icon: 'fa-lock', title: 'Secure Payment', description: 'SSL / Secure certificate' },
];

const Advantages = () => {
    return (
        <div className="product-page">
          <h1>Top Products</h1>
          <div className="advantages">
                {advantages.map((adv, index) => (
                <div key={index} className="advantage">
                    <p> <span><i className={`fa ${adv.icon}`}></i>
                    <h4>{adv.title}</h4>
                    <p>{adv.description}</p></span></p>
                </div>
            ))}
        </div>
        </div>
      );
   
};

export default Advantages;
