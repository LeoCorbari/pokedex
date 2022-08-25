import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
  const { pokemons, loading } = props;

  return (
    <main>
      <div className="pokedex-nav">
        <h1>Pokedex</h1>
        <div>paginação:</div>
      </div>
      {loading ? (
        <div> Carregando... </div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon index={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </main>
  );
};

export default Pokedex;
