import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IParams } from '../types/pokemonsTypes';

import pokemonsApi from '../api/pokemonsApi';
import { addPokemons, setPokemons } from './pokemonsSlice';

export const getPokemonsThunk = createAsyncThunk(
  'pokemons/getPokemons',
  async (params: IParams, { dispatch }) => {
    try {
      const pokemonList = await pokemonsApi.getPokemonsList(params);

      const results = await Promise.all(
        pokemonList.results.map(async (item) => ({
          ...item,
          ...await pokemonsApi.getPokemonData(item.name),
        })),
      );

      dispatch(setPokemons(results));
    } catch (error) {
      Alert.alert(
        'Can not get pokemon list',
        JSON.stringify((error as Error).message),
      );
    }
  },
);

export const additionalLoadingThunk = createAsyncThunk(
  'pokemons/additionalLoading',
  async (params: IParams, { dispatch }) => {
    try {
      const pokemonList = await pokemonsApi.getPokemonsList(params);

      const results = await Promise.all(
        pokemonList.results.map(async (item) => ({
          ...item,
          ...await pokemonsApi.getPokemonData(item.name),
        })),
      );

      dispatch(addPokemons(results));
    } catch (error) {
      Alert.alert(
        'Can not get pokemon list',
        JSON.stringify((error as Error).message),
      );
    }
  },
);
