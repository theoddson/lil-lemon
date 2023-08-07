import React from "react";
import Food1 from  '../images/food-1.png'

function CardTestimonial(props) {
    return (
      <>
        <div className="card card-testimonial">
            <img className="card-image"  src={props.image}/>
            <div className="card-bottom">
                <p className="card-title">{props.title}</p>
                <p className="card-title">5 Stars</p>
                <p>{props.description}</p>
                <div className="row">
                    <p className="highlight-text">Order a delivery</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  export default CardTestimonial;