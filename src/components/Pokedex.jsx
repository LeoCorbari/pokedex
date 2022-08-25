import React from "react";

const Pokedex = (props) => {
  const { pokmons, loading } = props;

  return (
    <main>
      <div className="pokedex-nav">
        <h1>Pokedex</h1>
        <div>paginação:</div>
      </div>
      {loading ? (
        <div> Carregando... </div>
      ) : (
        <div className="pokedex-grid"></div>
      )}
    </main>
  );
};

export default Pokedex;
