import React from "react";
import Food1 from  '../images/food-1.png'

function CardMeal(props) {
    return (
      <>
        <div className="card">
            <img className="card-image"  src={props.image}/>
            <div className="card-bottom">
                <div className="row space-between">
                    <p className="card-title">{props.title}</p>
                    <p>{props.price}</p>
                </div>
                <p>
                    {props.description}
                </p>
                <div className="row">
                    <p className="highlight-text">Order a delivery</p>
                </div>
            </div>
        </div>
      </>
    );
  }
  export default CardMeal;