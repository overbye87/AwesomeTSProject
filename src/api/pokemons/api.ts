import {
  IdOrName,
  IPokemonData,
  IParams,
  IPokemonsArray,
} from '../../types/pokemonsTypes';
import { pokemonAxios } from './axios';
import { IPokemonList } from '../../types/pokemonsApi';

const path = '/pokemon';

export const getPokemonsList = (params: IParams): Promise<IPokemonList> => {
  return pokemonAxios.get(path, { params });
};

export const getPokemonData = (idOrName: IdOrName): Promise<IPokemonData> => {
  return pokemonAxios.get(`${path}/${idOrName}`);
};

export const getPokemonFullDataArray = async (params: IParams): Promise<IPokemonsArray> => {
  const pokemonList = await getPokemonsList(params);
  const results = await Promise.all(
    pokemonList.results.map(async (item) => ({
      ...item,
      ...await getPokemonData(item.name),
    })),
  );
  return results;
};

export default {
  getPokemonsList,
  getPokemonData,
  getPokemonFullDataArray,
};
