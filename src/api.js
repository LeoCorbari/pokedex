export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // To DO fazer um ToastyNotify de pokemon não encontrado
    console.log("Erro: ", error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset==${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // To DO fazer um ToastyNotify de pokemon não encontrado
    console.log("Erro: ", error);
  }
};

export const getPokemonsData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // To DO fazer um ToastyNotify de pokemon não encontrado
    console.log("Erro: ", error);
  }
};
