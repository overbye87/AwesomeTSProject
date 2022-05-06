import { IdOrName, IPokemonData, IParams } from '../types/pokemonsTypes';
import { pokemonAxios } from './axios';

const path = '/pokemon';

interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}

export const getPokemonsList = (params: IParams): Promise<IPokemonList> => {
  return pokemonAxios.get(path, { params });
};

export const getPokemonData = (idOrName: IdOrName): Promise<IPokemonData> => {
  return pokemonAxios.get(`${path}/${idOrName}`);
};

interface IPokemonFullDataArray {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonData[];
}

export const getPokemonFullDataArray = async (params: IParams): Promise<IPokemonFullDataArray> => {
  const pokemonList = await getPokemonsList(params);
  pokemonList.results.map(async (item) => ({ ...item, ...await getPokemonData(item.name) }));
  return pokemonList;
};

export default {
  getPokemonsList,
  getPokemonData,
};
