import React from 'react';
//import { useState, useEffect } from 'react';
import beerImage from '../assets/beers.png';
import newBeerImage from '../assets/new-beer.png';
import randomBeerImage from '../assets/random-beer.png';


function Home () {
    return (
        <div>
        <img src={beerImage} alt="beer" />
        <br></br>
        <a href="/beers">All Beers</a>
        <br></br>
        <img src={newBeerImage} alt="beer" />
        <br></br>
        <a href="/random-beer">Random beer</a>
        <br></br>
        <img src={randomBeerImage} alt="beer" />
        <br></br>
        <a href="/new-beer">New Beer</a>
        </div>
    )
}

export default Home;