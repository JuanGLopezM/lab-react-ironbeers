import React from 'react';
//import { useState, useEffect } from 'react';
import beerImage from '../assets/beers.png';


function Home () {
    return (
        <div>
        <img src={beerImage} alt="beer" />
        <br></br>
        <a href="/beers">Beers</a>
        <br></br>
        <a href="/random-beer">Random beer</a>
        <br></br>
        <a href="/new-beer">New Beer</a>
        </div>
    )
}

export default Home;