import React from "react";
import AboutUs from './AboutUs'
import Specials from './Specials'
import Testimonials from "./Testimonials";

function Main() {
    return (
      <>
        <main className="section">
            <Specials />
            <AboutUs/>
            <Testimonials/>
        </main>
      </>
    );
  }
  export default Main;