import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPokemonById } from "../services/pokeapi";
import NotFound from "../pages/not-found";
import capitalize from "capitalize";

interface PokeCardProps {
  name: string;
  url: string;
}

export default function PokeCard({ name, url }: PokeCardProps) {
  interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: number[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_abilities: Ability[];
    past_types: Type[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  interface Ability {
    ability: AbilityStat;
    is_hidden: boolean;
    slot: number;
  }

  interface AbilityStat {
    name: string;
    url: string;
  }

  interface HeldItem {}

  interface Form {
    name: string;
    url: string;
  }

  interface Move {
    move: MoveStat;
    version_group_details: VersionGroupDetail[];
  }

  interface MoveStat {
    name: string;
    url: string;
  }

  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
  }

  interface MoveLearnMethod {
    name: string;
    url: string;
  }

  interface Species {
    name: string;
    url: string;
  }

  interface Sprites {
    back_default: string;
    front_default: string;
    front_shiny: string;
    other: OtherSprites;
    versions: Versions;
  }

  interface OtherSprites {
    dream_world: DreamWorld;
    home: Home;
    "official artwork": OfficialArtwork;
    showdown: Showdown;
  }

  interface DreamWorld {
    front_default: string;
    front_female: any;
  }

  interface Home {
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
  }

  interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
  }

  interface Showdown {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationII;
    "generation-iii": GenerationIII;
    "generation-iv": GenerationIV;
    "generation-v": GenerationV;
    "generation-vi": GenerationVI;
    "generation-vii": GenerationVII;
    "generation-viii": GenerationVIII;
  }

  interface GenerationI {
    "red-blue": RedBlue;
    yellow: Yellow;
  }

  interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }

  interface Yellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }

  interface GenerationII {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
  }

  interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }

  interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }

  interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }

  interface GenerationIII {
    emerald: Emerald;
    "firered-leafgreen": FireRedLeafGreen;
    "ruby-sapphire": RubySapphire;
  }

  interface Emerald {
    front_default: string;
    front_shiny: string;
  }

  interface FireRedLeafGreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }

  interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }

  interface GenerationIV {
    "diamond-pearl": DiamondPearl;
    "heartgold-soulsilver": HeartGoldSoulSilver;
    platinum: Platinum;
  }

  interface DiamondPearl {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface HeartGoldSoulSilver {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface Platinum {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface GenerationV {
    "black-white": BlackWhite;
  }

  interface BlackWhite {
    animated: BlackWhiteAnimated;
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface BlackWhiteAnimated {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface GenerationVI {
    "omegaruby-alphasapphire": OmegaRubyAlphaSapphire;
    "x-y": XY;
  }

  interface OmegaRubyAlphaSapphire {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface XY {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface GenerationVII {
    icons: IconsGenVII;
    "ultra-sun-ultra-moon": UltraSunUltraMoon;
  }

  interface IconsGenVII {
    front_default: string;
    front_female: string;
  }

  interface UltraSunUltraMoon {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  }

  interface GenerationVIII {
    icons: IconsGenVIII;
  }

  interface IconsGenVIII {
    front_default: string;
    front_female: string;
  }

  interface Stat {
    base_stat: number;
    effort: number;
    stat: StatType;
  }

  interface StatType {
    name: string;
    url: string;
  }

  interface Type {
    slot: number;
    type: TypeName;
  }

  interface TypeName {
    name: string;
    url: string;
  }

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [backgroundColor, setBackgroundColor] = useState("#AAA67F");
  const [id, setId] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonData = await fetchPokemonById(url);
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
