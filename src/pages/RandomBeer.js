import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RandomBeers () {
    const [randomBeerDetails, setrandomBeerDetails] = useState();
    const { beerId } = useParams();

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            console.log("response.data", response.data);
            setrandomBeerDetails(response.data);
          });
          // eslint-disable-next-line
      }, []);

      if (!randomBeerDetails){
        return <h1>Is Loading</h1>
      }

    return (
        <div>
        <header>
        <Link to="/">
          <img src={homeImage} alt="home"/>
          </Link>
        </header>

        <img src={randomBeerDetails.image_url} alt="beer" className="size"/>
        <h1>{randomBeerDetails.name}</h1>
        <p>{randomBeerDetails.tagline}</p>
        <p>{randomBeerDetails.first_brewed}</p>
        <p>{randomBeerDetails.attenuation_level}</p>
        <p>{randomBeerDetails.description}</p>
        <p>{randomBeerDetails.contributed_by}</p>
        
        </div>
    )
}




export default RandomBeers;