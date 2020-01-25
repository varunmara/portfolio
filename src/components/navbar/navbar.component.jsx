import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

const Navbar = props => (
  <div className="nav">
    <Link to="/" className="logo-container">
      <h1 className="logo">Hi!</h1>
    </Link>
    <div className="nav-items">
      <Link to="/Home" className="nav-item">
        Home
      </Link>
      <Link to="/About" className="nav-item">
        About
      </Link>
      <Link to="/contact" className="nav-item">
        Contact
      </Link>
    </div>
  </div>
);

export default Navbar;
