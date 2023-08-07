import React from "react";

import Header from '../Components/Header'
import Nav from '../Components/Navigation'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import logo from  '../images/ll-logo.png'

function Home() {
    return (
      <>
        <Nav></Nav>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    );
  }
  export default Home;