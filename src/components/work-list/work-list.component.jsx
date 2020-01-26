import React from "react";

const WorkList = () => {
  return (
    <div className="work-list" id="work">
      <div className="container">
        <h2 className="secondary-header">Featured Work</h2>
      </div>
      <div className="featured-work-container">
        <a
          href="https://github.com/varunmara/shopp"
          className="work-link work-link--50"
        >
          <div className="work-link-wrapper">
            <img
              className="work-link-image"
              src={require("../../images/shopp-online.png")}
            />
            <div className="work-link-content">
              <h3 className="link-content__header">SHOPP ONLINE</h3>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/varunmara/Natours"
          className="work-link work-link--50"
        >
          <div className="work-link-wrapper">
            <img
              className="work-link-image"
              src={require("../../images/natours.png")}
            />
            <div className="work-link-content">
              <h3 className="link-content__header">NATOURS</h3>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/varunmara/SQL-Queries"
          className="work-link work-link--50"
        >
          <div className="work-link-wrapper">
            <img
              className="work-link-image"
              src={require("../../images/database.png")}
            />
            <div className="work-link-content">
              <h3 className="link-content__header">DATABASE DESIGN</h3>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/varunmara/SQL-Queries"
          className="work-link work-link--50"
        >
          <div className="work-link-wrapper">
            <img
              className="work-link-image"
              src={require("../../images/monsters.png")}
            />
            <div className="work-link-content">
              <h3 className="link-content__header">MONSTERS-ROLODEX</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default WorkList;
