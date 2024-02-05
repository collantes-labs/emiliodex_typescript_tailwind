import { useState, useEffect } from "react";
import "./App.css";
import PokeCard from "./components/PokeCard";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import { fetchPokemons } from "./services/pokeapi";

export default function App() {
  interface Pokemon {
    name: string;
    url: string;
  }

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchPokemons();
      const data = response.data.results;
      setPokemons(data);
    };
    fetchData();
  }, []);

  return (
    <MainLayout>
      <div
        style={{ backgroundImage: `url(pokebackground.jpg)` }}
        className="bg-cover bg-no-repeat bg-fixed"
      >
        <Header />
        <div>
          {pokemons.map((pokemon, index) => (
            <div key={`pokemon-${index}`} className="grid grid-cols-4 gap-4">
              <PokeCard name={pokemon.name} url={pokemon.url} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
