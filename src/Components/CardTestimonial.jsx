import React from "react";

function CardTestimonial(props) {
    return (
        <div className="card card-testimonial">
            <img className="card-image"  src={props.image}/>
            <div className="card-bottom">
                <p className="card-title">{props.title}</p>
                <div className="rating row">
                    <span className="material-symbols-rounded stur">star</span>
                    <span className="material-symbols-rounded stur">star</span>
                    <span className="material-symbols-rounded stur">star</span>
                    <span className="material-symbols-rounded stur">star</span>
                    <span className="material-symbols-rounded">star</span>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
  }
  export default CardTestimonial;