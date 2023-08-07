import React from "react";
import Food1 from  '../images/food-1.png'
import AboutImage from  '../images/about-image.png'
import CardMeal from "./CardMeal";

function Specials() {
    return (
      <>
        <div className="row space-between">
            <h3 className="sub-text">This week's speacis</h3>
            <div className="button" role="button">Online menu</div>
        </div>
        <div class="row gap-24">
            <CardMeal 
                title="Hey"
                price="$5.20"
                description="The famous greek salad of crispy lettuce, peppers, olives and our 
                Chicago style feta cheese, garnished with crunchy garlic and 
                rosemary croutons. "
                image={Food1}
            />
            <CardMeal 
                title="Hey"
                price="$5.20"
                description="The famous greek salad of crispy lettuce, peppers, olives and our 
                Chicago style feta cheese, garnished with crunchy garlic and 
                rosemary croutons. "
                image={Food1}
            />
            <CardMeal 
                title="Hey"
                price="$5.20"
                description="The famous greek salad of crispy lettuce, peppers, olives and our 
                Chicago style feta cheese, garnished with crunchy garlic and 
                rosemary croutons. "
                image={Food1}
            />
            
        </div>
      </>
    );
  }
  export default Specials;