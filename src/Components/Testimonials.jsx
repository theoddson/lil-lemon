import React from "react";
import CardTestimonial from "./CardTestimonial";
import Person1 from '../images/person1.png'

function Testimonials() {
    return (
      <>
      <h3>Testimonials</h3>
        <div class="row gap-24">
            <CardTestimonial
                image={Person1}
                title="Ronda James"
                description="i love it."
            />
            <CardTestimonial
                image={Person1}
                title="Ronda James"
                description="i love it."
            />
            <CardTestimonial
                image={Person1}
                title="Ronda James"
                description="i love it."
            />
        </div>
      </>
    );
  }
  export default Testimonials;