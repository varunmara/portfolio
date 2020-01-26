import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className="nav">
    <nav className="nav">
      <div className="container container--vertically-center">
        <div className="nav__brand">
          <a href="/">
            <h1 className="logo-circle nav-logo"> Hi! </h1>
          </a>
        </div>
        <ul className="nav__list">
          <li className="nav__list-item">
            <a data-scroll href="/#work">
              Work
            </a>
          </li>
          <li className="nav__list-item">
            <a data-scroll href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
