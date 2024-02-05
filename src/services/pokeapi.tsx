import axios from "axios";

export const fetchPokemons = async () => {
  let url = `https://pokeapi.co/api/v2/pokemon`;
  const data = await axios.get(url);

  return data;
};

export const fetchPokemonById = async (url: string) => {
  const response = await axios.get(url);

  return response.data;
};
