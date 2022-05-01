export interface IPokemon {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {name: string; url: string};
}

export interface IPokemonData {
  id: number;
  height: number;
  stats: IStat[];
  name: string;
  order: number;
  base_experience: number;
  weight: number;
  sprites: {front_default: string};
}
