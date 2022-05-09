import { IdOrName, IPokemonData, IParams } from '../types/pokemonsTypes';
import { pokemonAxios } from './axios';
import { IPokemonFullDataArray, IPokemonList } from './interfaces';

const path = '/pokemon';

export const getPokemonsList = (params: IParams): Promise<IPokemonList> => {
  return pokemonAxios.get(path, { params });
};

export const getPokemonData = (idOrName: IdOrName): Promise<IPokemonData> => {
  return pokemonAxios.get(`${path}/${idOrName}`);
};

export const getPokemonFullDataArray = async (params: IParams): Promise<IPokemonFullDataArray> => {
  const pokemonList = await getPokemonsList(params);
  pokemonList.results.map(async (item) => ({ ...item, ...await getPokemonData(item.name) }));
  return pokemonList;
};

export default {
  getPokemonsList,
  getPokemonData,
};
