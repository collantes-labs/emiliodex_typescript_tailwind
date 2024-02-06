import { useState, useEffect } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import { fetchPokemons } from "./services/pokeapi";
import Pagination from "./components/Pagination";
import { PokemonProps } from "./interface/interfaces";

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemons();
      const data = response.data.results;
      setPokemons(data);
    };
    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const { paginatedPokemons, pagesCount, currentPage, onPageChange } =
    usePagination(filteredPokemons);

  // const handleClick = (page: number) => {
  //   setCurrentPage(page);
  // };

  if (!pokemons.length) return <Loading />;

  return (
    <MainLayout>
      <div
        style={{ backgroundImage: `url(pokebackground.jpg)` }}
        className="bg-cover bg-no-repeat bg-fixed"
      >
        <Header handleSearchChange={handleSearchChange} />
        <div className="w-3/4 mx-auto mt-8 pb-7">
          <div className="grid grid-cols-4 gap-4">
            {paginatedPokemons.map((pokemon, index) => (
              <div className="max-w-56">
                <PokeCard
                  key={`pokemon-${index}`}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </div>
            ))}
          </div>
        </div>
        <Pagination
          current={currentPage}
          count={pagesCount}
          onChange={(e, page) => onPageChange(page)}
        />
      </div>
    </MainLayout>
  );
}
