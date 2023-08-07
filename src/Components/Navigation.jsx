import React from "react";
import logo from  '../images/ll-logo.png'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
      <>
        <nav className="main-nav">
            <img src={logo} alt="little lemon logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Resevations</Link></li>
                <li><a href="#">Order online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
      </>
    );
  }
  export default Navigation;