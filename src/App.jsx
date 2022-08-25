import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import "./App.css";
import { getPokemons, getPokemonsData } from "./api";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.result.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });

      const results = Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;
