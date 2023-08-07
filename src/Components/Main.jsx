import React from "react";
import Food1 from  '../images/food-1.png'
import AboutImage from  '../images/about-image.png'

function Main() {
    return (
      <>
        <main className="section">
            <div className="row space-between">
                <h3 className="sub-text">This week's speacis</h3>
                <div className="button" role="button">Online menu</div>
            </div>
            <div class="row gap-24">
                <div className="card">
                    <img className="card-image"  src={Food1}/>
                    <div className="card-bottom">
                        <div className="row space-between">
                            <p className="card-title">Title</p>
                            <p>Price</p>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our 
                            Chicago style feta cheese, garnished with crunchy garlic and 
                            rosemary croutons. 
                        </p>
                        <div className="row">
                            <p className="highlight-text">Order a delivery</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img className="card-image"  src={Food1}/>
                    <div className="card-bottom">
                        <div className="row space-between">
                            <p className="card-title">Title</p>
                            <p>Price</p>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our 
                            Chicago style feta cheese, garnished with crunchy garlic and 
                            rosemary croutons. 
                        </p>
                        <div className="row">
                            <p className="highlight-text">Order a delivery</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <img className="card-image"  src={Food1}/>
                    <div className="card-bottom">
                        <div className="row space-between">
                            <p className="card-title">Title</p>
                            <p>Price</p>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our 
                            Chicago style feta cheese, garnished with crunchy garlic and 
                            rosemary croutons. 
                        </p>
                        <div className="row">
                            <p className="highlight-text">Order a delivery</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gap-24">
                <h3>Testimonials</h3>
            </div>

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
        </main>
      </>
    );
  }
  export default Main;