import React from "react";
import logo from  '../images/ll-logo.png'

function Navigation() {
    return (
      <>
        <nav>
            <img src={logo} alt="little lemon logo"/>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Resevations</a></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
      </>
    );
  }
  export default Navigation;