import "./Pokemon.css";

import { useEffect, useState } from "react";

export const HowNotToFetchApi = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Incorrect way to fetch data {because every time component re renders it requests the url for the data}

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => res.json())
  //   .then((data) => setApiData(data))
  //   .catch((err) => console.log(err));

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  // const fetchData = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  const fetchData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  // Correct way of fetching the data {even if component re renders due to empty dependency it does not execute}
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(pokemon);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  // if (pokemon) {
  return (
    <section className="container">
      <header>
        <h1>Lets catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
// };
