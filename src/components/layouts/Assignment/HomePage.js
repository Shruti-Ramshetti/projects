import React, { Component } from 'react';
import '../Assignment/HomePage.css';

class HomePage extends Component {
  render() {
    return (
        <>
           <div>
        <h1>One Page Bootstrap</h1>
        <h1>Website Template</h1>
        <h4>We are team of talented designers making websites with Bootstrap</h4>
        <button className="get-started" style={{marginBottom:"20px"}}>Get Started</button>
      </div>
      <div className='box-container'> 
      <div className='box'>
      <h3>Lorem Ipsum </h3><h4>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</h4>
      </div>
      <div className='box'>
      <h3>Sed ut perspiciati </h3><h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h4>
      </div>
      <div className='box'>
      <h3>Magni Dolores</h3><h4>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</h4>
      </div>
      <div className='box' style={{marginBottom:"20px"}}>
      <h3>Nemo Enim</h3><h4>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</h4>
      </div>
        </div>
        </>
   
    );
  }
}

export default HomePage;
