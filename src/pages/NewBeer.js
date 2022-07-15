import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { NavLink } from "react-router-dom";
//import { useState, useEffect } from 'react';


function NewBeer () {
    return (
        <div>
        <header>
        <NavLink to="/">
      <img src={homeImage} alt="home"/></NavLink>
        </header>
        <p>New Beer</p>
        </div>
    )
}

export default NewBeer;