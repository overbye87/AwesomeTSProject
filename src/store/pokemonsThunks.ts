import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IParams } from '../types/pokemonsTypes';

import pokemonsApi from '../api/pokemonsApi';
import { addPokemons } from './pokemonsSlice';

export const additionalLoadingThunk = createAsyncThunk(
  'pokemons/additionalLoading',
  async (params: IParams, { dispatch }) => {
    try {
      const pokemonsArray = await pokemonsApi.getPokemonFullDataArray(params);
      dispatch(addPokemons(pokemonsArray));
    } catch (error) {
      Alert.alert(
        'Can not get pokemon list',
        JSON.stringify((error as Error).message),
      );
    }
  },
);
