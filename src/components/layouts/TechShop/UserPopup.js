import React from 'react';
import './UserPopup.css';

function UserPopup() {
  return (
    <div className="popup user-popup">
      <p>Hello!</p>
      <p>Access account and manage orders</p>
      <button className="login-button">Login / Signup</button>
    </div>
  );
}

export default UserPopup;
