import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="list-menu">
        <div className="list-item">
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Cards</span>
            </li>
            <li>How it works</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="btn">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
