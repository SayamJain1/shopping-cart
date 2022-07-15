import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({cartItem}) {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Memezone
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              <i className="fas fa-shopping-cart"></i>
              <small >{ cartItem.length === 0 ? '' : cartItem.length}</small>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
