import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { ISignIn } from '../api/interfaces';

import authApi from '../api/authApi';
import { setUser } from './userSlice';

export const signInThunk = createAsyncThunk(
  'pokemons/getPokemons',
  async (SignInData: ISignIn, { dispatch }) => {
    try {
      dispatch(setUser(null));
      const data = await authApi.signIn(SignInData);
      dispatch(setUser(data.user));
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        JSON.stringify((error as Error).message),
      );
    }
  },
);
