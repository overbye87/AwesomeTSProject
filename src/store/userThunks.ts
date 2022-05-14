import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { ISignIn } from '../api/interfaces';

import authApi from '../api/authApi';
import { setUser } from './userSlice';

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async (signInData: ISignIn, { dispatch }) => {
    try {
      dispatch(setUser(null));
      const user = await authApi.signIn(signInData);
      Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setUser(user));
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        JSON.stringify((error as Error).message),
      );
    }
  },
);
