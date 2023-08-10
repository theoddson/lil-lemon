import React from "react";
import logo from  '../images/ll-logo.png'
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <nav className="main-nav">
            <Link to="/"><img src={logo} alt="little lemon logo"/></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className="main-nav-link-poof"><a href="#">About</a></li>
                <li className="main-nav-link-poof"><a href="#">Menu</a></li>
                <li><Link to="/booking">Resevations</Link></li>
                <li><a href="#">Order online</a></li>
                <li className="main-nav-link-poof"><a href="#">Login</a></li>
            </ul>
            
        </nav>
    );
  }
  export default Navigation;