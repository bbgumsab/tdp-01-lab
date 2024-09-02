import { useState } from "react";
import axios from "axios";

const total_pokemons = 500;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const RandomPokemon = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [showPokemon, setShowPokemon] = useState(false);

  const fetchPokemon = () => {
    const id = random(1, total_pokemons); // Get a new random ID each time the button is clicked
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
      setName(response.data.name);
      setUrl(response.data.sprites.other.dream_world.front_default);
      setShowPokemon(true);
    });
  };

  return (
    <>
      <button onClick={fetchPokemon}>Get a surprise!</button>
      {showPokemon && (
        <div>
          <img width="300" src={url} alt={name} />
          <br />
          <label>{name}</label>
          <br />
        </div>
      )}
    </>
  );
};

export default RandomPokemon;
