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
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-green-400">
      <button onClick={() => navigate(`/pokemon/${id}`)}>
        <div
          className={`border border-solid ${backgroundColor} flex flex-col rounded-tl-7 rounded-tr-7 h-350`}
        >
          <div>
            <span>{`#${id}`}</span>
          </div>
          <img src={src} alt={name} className="h-230 w-240" />
        </div>
        <div className={`bg-${backgroundColor}`}>
          <p className="bg-green-500 text-white p-2 text-center">
            {capitalize(name)}
          </p>
        </div>
      </button>
    </div>
  );
}
