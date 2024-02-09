import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonById } from "../services/pokeapi";
import { background } from "../utils/backgrounds-by-type";
import NotFound from "../pages/not-found";
import { PokeCardProps, Pokemon } from "../interface/interfaces";

export default function PokeCard({ name, url }: PokeCardProps) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#AAA67F");
  const [id, setId] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  interface APIError extends Error {
    status: number;
  }

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemonData = await fetchPokemonById(url);
        const pokemonType = pokemonData?.types?.[0]?.type
          ?.name as keyof typeof background;
        const pokemonBackgroundColor = background[pokemonType];
        setBackgroundColor(pokemonBackgroundColor);
        setPokemon(pokemonData);
      } catch (err) {
        if (err instanceof Error) {
          const error = err as APIError;
          if (error.status === 404) {
            setError(true);
          }
        }
      }
    };
    const getId = () => {
      const urlParts = url.split("/");
      const pokemonId = parseInt(urlParts[urlParts.length - 2], 10);
      setId(pokemonId);
    };
    fetchPokemon();
    getId();
  }, [url]);

  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

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
          {error && <img src="default-img.webp" alt={name} className="h-40" />}
          {!error && (
            <img
              src={src}
              onError={() => setError(true)}
              alt={name}
              className="h-40"
            />
          )}
        </div>
        <div className={backgroundColor}>
          <p className="b text-white p-2 text-center">{capitalizedName}</p>
        </div>
      </button>
    </div>
  );
}
