import React from "react";

import Navbar from "../navbar/navbar.component.jsx";

const Hero = props => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title">
          I’m Varun Marannagari, currently a master's student at
          <a
            href="https://www.southalabama.edu/"
            target="_blank"
            className="hero__Link hero__link--second"
          >
            {" "}
            U of South Alabama
          </a>{" "}
          and working at{" "}
          <a
            className="hero__link"
            target="_blank"
            href="https://corporate.arcelormittal.com/"
          >
            AM/NS Calvert
          </a>
          .
        </h1>
      </div>
      <div className="container container--wrap">
        <div className="hero__employer">
          <h3 className="employer__label">Currently:</h3>
          <a
            className="south-logo"
            target="_blank"
            href="https://www.southalabama.edu/"
          >
            <img src={require("../../images/southalabamalogo.png")} />
          </a>
        </div>
        <div className="hero__employer">
          <h3 className="employer__label"></h3>
          <a
            target="_blank"
            className="amns-logo"
            href="https://corporate.arcelormittal.com/"
          >
            <img
              src={require("../../images/amnslogo.png")}
              alt="AM/NS Calvert"
            />
          </a>
        </div>
      </div>
      <div className="hero-background">
        <div className="rect"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
      </div>
    </div>
  );
};

export default Hero;
