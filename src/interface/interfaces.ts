export interface PokemonProps {
  name: string;
  url: string;
}

export interface PokeCardProps {
  name: string;
  url: string;
}

export interface BackgroundTypes {
  [key: string]: string;
}

export interface HeaderProps {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PaginationProps {
  current: number;
  count: number;
  onChange: (page: number) => void;
}

export interface Pokemon {
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

export interface Ability {
  ability: AbilityStat;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityStat {
  name: string;
  url: string;
}

export interface HeldItem {}

export interface Form {
  name: string;
  url: string;
}

export interface Move {
  move: MoveStat;
  version_group_details: VersionGroupDetail[];
}

export interface MoveStat {
  name: string;
  url: string;
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
}

export interface MoveLearnMethod {
  name: string;
  url: string;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: OtherSprites;
  versions: Versions;
}

export interface OtherSprites {
  dream_world: DreamWorld;
  home: Home;
  "official artwork": OfficialArtwork;
  showdown: Showdown;
}

export interface DreamWorld {
  front_default: string;
  front_female: any;
}

export interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Showdown {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationII;
  "generation-iii": GenerationIII;
  "generation-iv": GenerationIV;
  "generation-v": GenerationV;
  "generation-vi": GenerationVI;
  "generation-vii": GenerationVII;
  "generation-viii": GenerationVIII;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: Yellow;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Yellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationII {
  crystal: Crystal;
  gold: Gold;
  silver: Silver;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Silver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIII {
  emerald: Emerald;
  "firered-leafgreen": FireRedLeafGreen;
  "ruby-sapphire": RubySapphire;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface FireRedLeafGreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIV {
  "diamond-pearl": DiamondPearl;
  "heartgold-soulsilver": HeartGoldSoulSilver;
  platinum: Platinum;
}

export interface DiamondPearl {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface HeartGoldSoulSilver {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface Platinum {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationV {
  "black-white": BlackWhite;
}

export interface BlackWhite {
  animated: BlackWhiteAnimated;
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface BlackWhiteAnimated {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVI {
  "omegaruby-alphasapphire": OmegaRubyAlphaSapphire;
  "x-y": XY;
}

export interface OmegaRubyAlphaSapphire {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface XY {
  front_default: string | any;
  front_female: string | any;
  front_shiny: string | any;
  front_shiny_female: string | any;
}

export interface GenerationVII {
  icons: IconsGenVII;
  "ultra-sun-ultra-moon": UltraSunUltraMoon;
}

export interface IconsGenVII {
  front_default: string | null;
  front_female: string | null;
}

export interface UltraSunUltraMoon {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface GenerationVIII {
  icons: IconsGenVIII;
}

export interface IconsGenVIII {
  front_default: string | null;
  front_female: string | null;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: StatType;
}

export interface StatType {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeName;
}

export interface TypeName {
  name: string;
  url: string;
}
