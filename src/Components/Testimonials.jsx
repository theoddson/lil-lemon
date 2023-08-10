import React from "react";
import CardTestimonial from "./CardTestimonial";
import Person1 from '../images/person1.png'
import Person2 from '../images/person2.png'
import Person3 from '../images/person3.png'

function Testimonials() {
    return (
      <div className="section">
      <h3 className="sub-text text-align-center mb-32">Testimonials</h3>
        <div className="row gap-24">
            <CardTestimonial
                image={Person1}
                title="Ronda James"
                description="i love it."
            />
            <CardTestimonial
                image={Person2}
                title="Ronda James"
                description="i love it."
            />
            <CardTestimonial
                image={Person3}
                title="Ronda James"
                description="i love it."
            />
        </div>
      </div>
    );
  }
  export default Testimonials;