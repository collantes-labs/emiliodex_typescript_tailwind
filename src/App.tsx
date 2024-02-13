import { useState, useEffect } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import usePagination from "./hooks/usePagination";
import Loading from "./pages/loading-page";
import { fetchPokemons } from "./services/pokeapi";
import Pagination from "./components/Pagination";
import { PokemonProps } from "./interface/interfaces";
import { useDebounce } from "@uidotdev/usehooks";

export default function App() {
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemons();
      const data = response.data.results;
      setPokemons(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    localStorage.setItem("currentPage", page.toString());
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .includes(debouncedSearchTerm.toLowerCase());
  });

  const { paginatedPokemons, pagesCount } = usePagination(
    filteredPokemons,
    currentPage
  );

  if (!pokemons.length) return <Loading />;

  return (
    <div
      style={{ backgroundImage: `url(pokebackground.jpg)` }}
      className="bg-cover bg-no-repeat bg-fixed h-full 2xl:h-screen"
    >
      <Header handleSearchChange={handleSearchChange} />
      <div className="w-3/4 mx-auto mt-8 pb-7">
        <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {paginatedPokemons.map((pokemon, index) => (
            <div key={`pokemon-${index}`} className="max-w-56">
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
        onChange={onPageChange}
      />
    </div>
  );
}
