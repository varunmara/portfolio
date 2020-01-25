import React from "react";

import "./header.styles.scss";

import Navbar from "../navbar/navbar.component.jsx";

const Header = props => {
  return (
    <div className="header">
      <Navbar />
      <div className="hero-section">
        <p className="content">
          Hi!, I'm Varun Marannagari, currently working as a student intern at
          AM/NS Calvert. Let's talk.
        </p>
      </div>
    </div>
  );
};

export default Header;
