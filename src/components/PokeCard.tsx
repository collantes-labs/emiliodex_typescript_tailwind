import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonById } from "../services/pokeapi";
import { background } from "../utils/backgrounds-by-type";
import capitalize from "capitalize";
import NotFound from "../pages/not-found";
import { PokeCardProps, Pokemon } from "../interface/interfaces";

export default function PokeCard({ name, url }: PokeCardProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#AAA67F");
  const [id, setId] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await fetchPokemonById(url);
      const pokemonType = pokemonData?.types?.[0]?.type
        ?.name as keyof typeof background;
      const pokemonBackgroundColor = background[pokemonType];
      setBackgroundColor(pokemonBackgroundColor);
      setPokemon(pokemonData);
    };
    const getId = () => {
      const urlParts = url.split("/");
      const pokemonId = parseInt(urlParts[urlParts.length - 2], 10);
      setId(pokemonId);
    };
    fetchPokemon();
    getId();
  }, [url]);

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  if (id === 0 || pokemon === null) {
    return <NotFound />;
  }

  return (
    <div>
      <button
        className="w-56 sm:w-28 md:w-36 lg:w-48"
        onClick={() => navigate(`/pokemon/${id}`)}
      >
        <div
          className={
            "bg-white flex flex-col h-350 border border-green-500 rounded-t-lg"
          }
        >
          <div>
            <span>{`#${id}`}</span>
          </div>
          <img src={src} alt={name} className="h-40" />
        </div>
        <div className={backgroundColor}>
          <p className="b text-white p-2 text-center">{capitalize(name)}</p>
        </div>
      </button>
    </div>
  );
}
