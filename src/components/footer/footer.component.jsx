import React from "react";

const Footer = props => {
  return (
    <div className="footer" id="contact">
      <div className="container">
        <h2 className="secondary-header">Looking to start a project?</h2>
        <a className="hero__link" href="mailto: varungowde@gmail.com">
          {" "}
          Let's talk.
        </a>
      </div>
      <div className="container">
        <ul className="social-list">
          <li className="social-list__item">
            <a
              href="https://github.com/varunmara"
              className="social-list__item-link"
            >
              GitHub
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://twitter.com/varun_mara"
              className="social-list__item-link"
            >
              Twitter
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://www.linkedin.com/in/varunmara"
              className="social-list__item-link"
            >
              LinkedIn
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://www.instagram.com/varunmara/"
              className="social-list__item-link"
            >
              Instagram
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="mailto: varungowde@gmail.com"
              className="social-list__item-link"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
