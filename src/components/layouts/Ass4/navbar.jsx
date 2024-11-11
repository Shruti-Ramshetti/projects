import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){
 return(
    <div className='navbar'>
        <h1>E-Commerce App</h1>
        <Link to="/catalog">Product Catalog</Link> 
        <Link to="/about">About Us</Link> 
        <Link to="/contact">Contact Us</Link>
         
    </div>
 )
}
export default Navbar;