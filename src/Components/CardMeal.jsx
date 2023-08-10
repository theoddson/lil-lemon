import React from "react";
import Food1 from  '../images/food-1.png'

function CardMeal(props) {
    return (
        <div className="card">
            <img className="card-image"  src={props.image}/>
            <div className="card-bottom">
                <div className="row space-between mb-8">
                    <p className="card-title">{props.title}</p>
                    <p className="price">{props.price}</p>
                </div>
                <p className="mb-16">
                    {props.description}
                </p>
                <div className="row">
                    <p className="highlight-text text-bold">Order a delivery</p>
                </div>
            </div>
        </div>
    );
  }
  export default CardMeal;