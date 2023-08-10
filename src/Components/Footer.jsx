import React from "react";

import Logo2 from  '../images/logo2.png'

function Footer() {
    return (
        <footer>
            <div><img className="footer-logo" src={Logo2} alt="little lemon logo" /></div>
            <nav>
                <h6>Doormat Nav igation</h6>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
            <nav>
                <h6>Contact</h6>
                <ul>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Phone number</a></li>
                    <li><a href="#">Email</a></li>
                </ul>
            </nav>
            <nav>
                <h6>Social Media</h6>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Tik tok</a></li>
                    <li><a href="#">Threads</a></li>
                </ul>
            </nav>
        </footer>
    );
  }
  export default Footer;