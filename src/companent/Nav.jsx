import React from 'react'
import Carusel from "./Carousel";
import Card from "./Card";
import Footer from './footer';
import Navbar from './navbar';
const Nav = () => {
  return (
    <div>
      <Navbar/>
      <Carusel />
      <Card />
      <Footer />
    </div>
  )
}

export default Nav