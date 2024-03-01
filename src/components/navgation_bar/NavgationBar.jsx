import React from "react";
import "./nav.scss";

const NavgationBar = () => {
  return (
    <div className="navgation_bar">
      <div className="nav">
        <h2 className="brand_title">
          <span className="name">ash</span> components
        </h2>
        <form className="search">
          <input placeholder="What are you looking for" />
          <button className="search">search</button>
        </form>
        <ul className="linksControls">
          <li className="link">home</li>
          <li className="link">
            <button className="btn">GitHub Repos</button>
          </li>
        </ul>
      </div>
      <ul className="links">
        <li className="link">style</li>
        <li className="link">btns</li>
        <li className="link">colors</li>
        <li className="link">ai</li>
        <li className="link">cv</li>
        <li className="link">btns</li>
        <li className="link">portfolios</li>
        <li className="link">products card</li>
        <li className="link">courses</li>
        <li className="link">courses</li>
        <li className="link">frame works</li>
        <li className="link">liberay</li>
      </ul>
    </div>
  );
};

export default NavgationBar;
