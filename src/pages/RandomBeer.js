import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { NavLink } from "react-router-dom";
//import { useState, useEffect } from 'react';


function RandomBeers () {
    return (
        <div>
       <header>
        <NavLink to="/">
      <img src={homeImage} alt="home"/></NavLink>
        </header>
        <p>Random Beer</p>
        </div>
    )
}

export default RandomBeers;