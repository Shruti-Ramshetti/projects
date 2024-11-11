import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';
import SearchPopup from './SearchPopup';
import CartPopup from './CartPopup';
import UserPopup from './UserPopup';

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    setShowCart(false);
    setShowUser(false);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
    setShowSearch(false);
    setShowUser(false);
  };

  const handleUserClick = () => {
    setShowUser(!showUser);
    setShowSearch(false);
    setShowCart(false);
  };
  return (
    <header className="header">
      <div className="logo">Tech-Shop</div>
      <div className="header-icons">
      <div className="footer-icon" onMouseEnter={() => setShowSearch(true)} onMouseLeave={() => setShowSearch(false)} onClick={handleSearchClick}>
        <i className="fas fa-search"></i>
        {showSearch && <span className="tooltip">Search</span>}
        {showSearch && <SearchPopup />}
      </div>

      <div className="footer-icon" onMouseEnter={() => setShowCart(true)} onMouseLeave={() => setShowCart(false)} onClick={handleCartClick}>
        <i className="fas fa-shopping-cart"></i>
        {showCart && <span className="tooltip">Cart</span>}
        {showCart && <CartPopup />}
      </div>

      <div className="footer-icon" onMouseEnter={() => setShowUser(true)} onMouseLeave={() => setShowUser(false)} onClick={handleUserClick}>
        <i className="fas fa-user"></i>
        {showUser && <span className="tooltip">Account</span>}
        {showUser && <UserPopup />}
      </div>
        {/* <a href="/search" className="icon">
          <FaSearch />
        </a>
        <a href="/cart" className="icon">
          <FaShoppingCart />
        </a>
        <a href="/profile" className="icon">
          <FaUser />
        </a> */}
      </div>
    </header>
  );
};

export default Header;
