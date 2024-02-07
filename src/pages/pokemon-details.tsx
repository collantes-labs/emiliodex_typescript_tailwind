import { useEffect, useState } from "react";
import capitalize from "capitalize";
import { background } from "../utils/backgrounds-by-type";
import Loading from "./loading-page";
import axios from "axios";
import { Pokemon } from "../interface/interfaces";
import { defaultPokemon } from "../default-values/defaultPokemon";
import { useParams } from "react-router-dom";

export default function PokemonDetails() {
  const [pokemon, setPokemon] = useState<Pokemon>(defaultPokemon);
  const [backgroundColor, setBackgroundColor] = useState<string>("bg-gray-400");

  const getIdFromUrl = useParams();
  const { pokemonId } = getIdFromUrl;
  const detailsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(detailsUrl);
      setPokemon(result.data);
      const pokemonBackgroundColor =
        background[pokemon?.types?.[0]?.type?.name];
      setBackgroundColor(pokemonBackgroundColor);
    };
    fetchData();
  }, [detailsUrl, pokemon?.types]);

  const pokemonStats = pokemon?.stats;
  const statNames = [
    "HP",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ];
  const pokemonTypes = pokemon?.types;
  const pokemonTypeNames = pokemonTypes.map((type) => {
    return type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
  });
  const typeString = pokemonTypeNames.join(", ");
  const pokemonStatsValues = pokemonStats.map((stats) => stats.base_stat);
  const statsWithNames = pokemonStatsValues.map((value, index) => ({
    name: statNames[index],
    value,
  }));
  const artwork = pokemon?.sprites?.other?.["official-artwork"]?.front_default;

  if (!pokemonTypes) {
    return <Loading />;
  }

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${backgroundColor} flex-col min-w-screen`}
    >
      <div className="w-2/3 p-16 flex flex-col cursor-pointer mt-5 rounded-md bg-white shadow-lg hover:scale-105">
        <div className="flex justify-center">
          {artwork === null ? (
            <img
              className="max-w-md max-h-72"
              src="../default-img.webp"
              alt={pokemon?.name}
            />
          ) : (
            <img
              className="max-w-md max-h-72"
              src={artwork}
              alt={pokemon?.name}
            />
          )}
        </div>
        <div>
          <p className="text-center mt-7 font-semibold text-xl">
            {capitalize(pokemon?.name)}
          </p>
          <p className="text-center mb-7">{typeString}</p>
          {statsWithNames.map((stat) => (
            <p key={stat.name}>
              {stat.name}: {stat.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
