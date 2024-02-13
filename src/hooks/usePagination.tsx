import { useMemo } from "react";
import { PokemonProps } from "../interface/interfaces";

export default function usePagination(
  pokemons: PokemonProps[],
  currentPage: number
) {
  const pageSize = 20;
  const totalPokemon = pokemons.length;
  const pagesCount = useMemo(() => {
    return Math.ceil(totalPokemon / pageSize);
  }, [totalPokemon, pageSize]);

  const indexOfLastPokemon = currentPage * pageSize;
  const indexOfFirstPokemon = indexOfLastPokemon - pageSize;

  const paginatedPokemons = useMemo(() => {
    return pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  }, [pokemons, indexOfFirstPokemon, indexOfLastPokemon]);

  return {
    paginatedPokemons,
    pagesCount,
    currentPage,
  };
}
