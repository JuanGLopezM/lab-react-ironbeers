import React from 'react';
import homeImage from '../assets/HomeImage.png';
import { NavLink, Link } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect} from 'react';


function ListBeers () {
    const [allBeers, setAllBeers] = useState([]);

    useEffect(() => {
        axios
          .get("https://ih-beers-api2.herokuapp.com/beers")
          .then((response) => {
            console.log("response.data", response.data);
            setAllBeers(response.data);
            // console.log(apartments)
          });
      }, []);

    return (
        <div>
        <header>
        <Link to="/">
      <img src={homeImage} alt="home"/>
      </Link>
        </header>
        {allBeers.map((beer) => {
        return (
          <div key={beer._id} >
          <NavLink to={`/beers/${beer._id}`}>
            <img src={beer.image_url} alt="beer" className="size"/>
            </NavLink>
            <h3>Name: {beer.name}</h3>
            <p>Tagline: {beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        );
      })}

       <p>List Beers</p>
        </div>
    )
}

export default ListBeers;