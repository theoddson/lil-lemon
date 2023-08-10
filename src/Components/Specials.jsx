import React from "react";
import Food1 from  '../images/food-1.png'
import Food2 from  '../images/food-2.png'
import Food3 from  '../images/food-3.png'
import CardMeal from "./CardMeal";

function Specials() {
    return (
      <div className="section">
        <div className="row space-between mb-32">
            <h3 className="sub-text">This week's speacials</h3>
            <div className="button" role="button">Online menu</div>
        </div>
        <div className="row gap-24">
            <CardMeal
                title="Greek salad"
                price="$12.99"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                image={Food1}
            />
            <CardMeal
                title="Bruchetta"
                price="$5.99"
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. MMmmm mmmm good. "
                image={Food2}
            />
            <CardMeal
                title="Lemon Dessert"
                price="$5.00"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                image={Food3}
            />

        </div>
      </div>
    );
  }
  export default Specials;