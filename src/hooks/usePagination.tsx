import { useState, useMemo } from "react";
import { PokemonProps } from "../interface/interfaces";

export default function usePagination(pokemons: PokemonProps[]) {
  const pageSize = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPokemon = pokemons.length;
  const pagesCount = useMemo(() => {
    return Math.ceil(totalPokemon / pageSize);
  }, [totalPokemon, pageSize]);

  const indexOfLastPokemon = currentPage * pageSize;
  const indexOfFirstPokemon = indexOfLastPokemon - pageSize;

  const paginatedPokemons = useMemo(() => {
    return pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  }, [pokemons, indexOfFirstPokemon, indexOfLastPokemon]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return {
    paginatedPokemons,
    pagesCount,
    currentPage,
    onPageChange,
  };
}
