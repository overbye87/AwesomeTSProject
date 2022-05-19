import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { IParams } from '../../types/pokemonsTypes';

import pokemonsApi from '../../api/pokemons/api';
import { addPokemons, setLoading } from './pokemonsSlice';

export const additionalLoadingThunk = createAsyncThunk(
  'pokemons/additionalLoading',
  async (params: IParams, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const pokemonsArray = await pokemonsApi.getPokemonFullDataArray(params);
      dispatch(setLoading(false));
      dispatch(addPokemons(pokemonsArray));
    } catch (error) {
      Alert.alert(
        'Can not get pokemon list',
        JSON.stringify((error as Error).message),
      );
      dispatch(setLoading(false));
    }
  },
);
