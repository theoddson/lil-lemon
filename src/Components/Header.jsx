import React from "react";
import HeroImage from "../images/hero-image.png"

function Header() {
    return (
      <header className="section">
        <div className="col">
          <h1 className="display-text">Little Lemon</h1>
          <p className="sub-text"> Chicago</p>
          <p classNAem="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button" role="button">Reserve a table</div>
        </div>
        <div>
          <img className="hero-image" src={HeroImage} alt="hero image"/>
        </div>
      </header>
    );
  }
  export default Header;