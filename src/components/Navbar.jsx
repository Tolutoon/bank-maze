import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img className="main-logo" src={Logo} alt="logo" />
      </div>
      <div className="list-menu">
        <div className="list-item">
          <ul>
            <li>
              <Link className="link" to='/'>Home</Link>
            </li>
            <li>
            <Link className='link' to='/cards'>Card</Link>
            </li>
            <li>
            <Link className='link' to='/cards'>How it works</Link>
                </li>
            <li>
            <Link className='link' to='/cards'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="btn">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
