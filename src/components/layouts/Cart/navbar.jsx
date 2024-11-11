import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar(){
 return(
    <div className='navbar'>
        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt='logo'/>
        <Link to='/'>Home</Link>
        <Link to='/Electronics'>Electronics</Link>
        <Link to='/Fashion'>Clothing</Link>
        <Link to='/Accessories'>Accessories</Link>
        
    </div>
 )
}
export default Navbar;