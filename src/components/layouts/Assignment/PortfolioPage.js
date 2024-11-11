import React, { Component } from 'react';
import '../Assignment/PortfolioPage.css';
import p1 from './images/masonry-portfolio/masonry-portfolio-1.jpg';
import p2 from './images/masonry-portfolio/masonry-portfolio-2.jpg';
import p3 from './images/masonry-portfolio/masonry-portfolio-3.jpg';
import p4 from './images/masonry-portfolio/masonry-portfolio-4.jpg';
import p5 from './images/masonry-portfolio/masonry-portfolio-5.jpg';
import p6 from './images/masonry-portfolio/masonry-portfolio-6.jpg';
import p7 from './images/masonry-portfolio/masonry-portfolio-7.jpg';
import p8 from './images/masonry-portfolio/masonry-portfolio-8.jpg';
import p9 from './images/masonry-portfolio/masonry-portfolio-9.jpg';


class PortfolioPage extends Component {
  render() {
    return (
        <>
        <div>
        <h1>PORTFOLIO</h1>
        <h5>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</h5>
        </div>
        <div className='box-container6'>
        <div> <img src={p1}/></div>
        <div> <img src={p2}/></div> 
        <div> <img src={p3}/></div> 
        </div>
        <div className='box-container7'>
        <div> <img src={p4}/></div>
        <div> <img src={p5}/></div> 
        <div> <img src={p6}/></div> 
        </div>
        <div className='box-container8'>
        <div> <img src={p7}/></div>
        <div> <img src={p8}/></div> 
        <div> <img src={p9}/></div> 
        </div>
        </>
        
    );
  }
}

export default PortfolioPage;
