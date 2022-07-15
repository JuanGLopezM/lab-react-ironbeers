import React from 'react';
//import { useState, useEffect } from 'react';
import beerImage from '../assets/beers.png';
import newBeerImage from '../assets/new-beer.png';
import randomBeerImage from '../assets/random-beer.png';
import { Link } from "react-router-dom";


function Home () {
    return (
        <div>
        <Link to="/beers">
          <img src={beerImage} alt="beer" />
        </Link>
        <h3>All Beers</h3>
        <br></br>
        <Link to="/random-beer">
          <img src={randomBeerImage} alt="beer" />
        </Link>
        <h3>Random beer</h3>
        <br></br>
        <Link to="/new-beer">
          <img src={newBeerImage} alt="beer" />
        </Link>
        <h3>New Beer</h3>
        </div>
    )
}

export default Home;