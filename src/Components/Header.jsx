import React from "react";
import HeroImage from "../images/hero-image.png"
import {Link} from 'react-router-dom'

function Header() {
    return (
      <header>
        <div className="col">
          <h1 className="display-text">Little Lemon</h1>
          <p className="sub-text mb-8"> Chicago</p>
          <p className="paragraph mb-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/booking" className="button" role="button">Reserve a table</Link>
        </div>
        <div>
          <img className="hero-image" src={HeroImage} alt="hero image"/>
        </div>
      </header>
    );
  }
  export default Header;