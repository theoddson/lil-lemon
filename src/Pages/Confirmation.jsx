import React from "react";
import Nav from '../Components/Navigation'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="confirmation-page">
          <div className="confirmation-message mb-32">
            <h1 className="display-text text-align-center mb-16">Thank you</h1>
            <p className="paragraph text-align-center">We have booked your reservation. We'll send you a reminder on the day of.</p>
          </div>
          <Link className="button" role="button" to="/">Back to home</Link>
        </div>
    );
  }
  export default Home;