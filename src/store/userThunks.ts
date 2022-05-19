import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import { ISignIn, ISignUp } from '../api/interfaces';

import authApi from '../api/auth/api';
import { setUser } from './userSlice';

export const signInThunk = createAsyncThunk(
  'user/signIn',
  async (signInData: ISignIn, { dispatch }) => {
    try {
      dispatch(setUser(null));
      const user = await authApi.signIn(signInData);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setUser(user));
    } catch (error) {
      Alert.alert(
        JSON.stringify((error as AxiosError).message),
        JSON.stringify((error as AxiosError).response?.data.message),
      );
    }
  },
);

export const signUpThunk = createAsyncThunk(
  'user/signUp',
  async (signUpData: ISignUp, { dispatch }) => {
    try {
      dispatch(setUser(null));
      const user = await authApi.signUp(signUpData);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setUser(user));
    } catch (error) {
      Alert.alert(
        JSON.stringify((error as AxiosError).message),
        JSON.stringify((error as AxiosError).response?.data.message),
      );
    }
  },
);
