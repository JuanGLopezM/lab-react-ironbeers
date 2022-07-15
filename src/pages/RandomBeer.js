import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { Link } from "react-router-dom";
//import { useState, useEffect } from 'react';


function RandomBeers () {
    return (
        <div>
       <header>
        <Link to="/">
      <img src={homeImage} alt="home"/>
      </Link>
        </header>
        <p>Random Beer</p>
        </div>
    )
}

export default RandomBeers;