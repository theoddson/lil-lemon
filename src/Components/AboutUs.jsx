import React from "react";
import Food1 from  '../images/food-1.png'
import AboutImage from  '../images/about-image.png'

function AboutUs() {
    return (
        <div className="row gap-24 section">
            <div className="col">
              <h1 className="display-text mb-16">Little Lemon</h1>
              <p className="sub-text mb-32"> Chicago</p>
              <p className="paragraph">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                do amet sint. Velit officia consequat duis enim velit mollit. 
                Exercitation veniam consequat sunt nostrud amet. 
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <img className="hero-image" src={AboutImage} alt="hero image"/>
            </div>
        </div>
    );
  }
  export default AboutUs;