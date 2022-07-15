import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { NavLink } from "react-router-dom";
//import { useState, useEffect } from 'react';
import { :beerId } from './pages/ListBeers';

function SingleBeer () {
    return (
        <div>
        <header>
        <NavLink to="/">
      <img src={homeImage} alt="home"/></NavLink>
        </header>
        <p>Single Beer</p>
        </div>
    )
}

export default SingleBeer;