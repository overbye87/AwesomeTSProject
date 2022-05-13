export interface IPokemon {
  name: string;
  url: string;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {name: string; url: string};
}
interface ISprites {
  front_default: string;
  back_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
    home: {
      front_default: string;
      front_shiny: string;
    };
    'official-artwork': {
      front_default: string
    };
  };
}

interface IAbility {
  ability: {name: string; url: string};
  is_hidden: boolean;
  slot: number;
}
export interface IPokemonData {
  id: number;
  height: number;
  stats: IStat[];
  name: string;
  order: number;
  base_experience: number;
  weight: number;
  sprites: ISprites;
  abilities: IAbility[];
}

export interface IPokemonFullData extends IPokemon, IPokemonData {}

export type IPokemonsArray = IPokemonFullData[];

export interface IParams {
  limit: number;
  offset: number;
}

export type IdOrName = number | string
