import { IPokemon, IPokemonData } from './pokemonsTypes';

export interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IPokemonFullDataArray {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonData[];
}
