import React from "react";
import homeImage from "../assets/HomeImage.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState([]);
  const [tagline, setTagline] = useState([]);
  const [description, setDescription] = useState([]);
  const [firstBrewed, setFirstBrewed] = useState([]);
  const [brewersTips, setBrewersTips] = useState([]);
  const [attenuationLevel, setAttenuationLevel] = useState([]);
  const [contributedBy, setContributedBy] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel();
        setContributedBy("");
        navigate("/");
      });
  };

  return (
    <div>
      <header>
        <Link to="/">
          <img src={homeImage} alt="home" />
        </Link>
      </header>
      <p>New Beer</p>

      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </li>
          <li>
            <label>Tagline</label>
            <input
              type="text"
              name="tagline"
              onChange={(e) => setTagline(e.target.value)}
              value={tagline}
            />
          </li>
          <li>
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </li>
          <li>
            <label>First Brewed</label>
            <input
              type="text"
              name="firstBrewed"
              onChange={(e) => setFirstBrewed(e.target.value)}
              value={firstBrewed}
            />
          </li>
          <li>
            <label>Brewers Tips</label>
            <input
              type="text"
              name="brewersTips"
              onChange={(e) => setBrewersTips(e.target.value)}
              value={brewersTips}
            />
          </li>
          <li>
            <label>Attenuation Level</label>
            <input
              type="number"
              name="attenuationLevel"
              onChange={(e) => setAttenuationLevel(e.target.value)}
              value={attenuationLevel}
            />
          </li>
          <li>
            <label>Contributed By</label>
            <input
              type="text"
              name="contributedBy"
              onChange={(e) => setContributedBy(e.target.value)}
              value={contributedBy}
            />
          </li>
        </ul>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}


export default NewBeer;
