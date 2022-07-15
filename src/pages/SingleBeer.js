import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleBeer () {
    const [beerDetails, setbeerDetails] = useState();
    const { beerId } = useParams();

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            console.log("response.data", response.data);
            setbeerDetails(response.data);
          });
          // eslint-disable-next-line
      }, []);

      if (!beerDetails){
        return <h1>Is Loading</h1>
      }

    return (
        <div>
        <header>
        <Link to="/">
          <img src={homeImage} alt="home"/>
          </Link>
        </header>

        <img src={beerDetails.image_url} alt="beer" className="size"/>
        <h1>{beerDetails.name}</h1>
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
        
        </div>
    )
}

export default SingleBeer;

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by