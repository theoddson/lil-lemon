import React from "react";
import Food1 from  '../images/food-1.png'
import AboutImage from  '../images/about-image.png'

function AboutUs() {
    return (
      <>
        <div class="row gap-24">
            <div className="col">
              <h1 className="display-text">Little Lemon</h1>
              <p className="sub-text"> Chicago</p>
              <p classNAem="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <img className="hero-image" src={AboutImage} alt="hero image"/>
            </div>
        </div>
      </>
    );
  }
  export default AboutUs;