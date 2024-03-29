import { createAsyncThunk } from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { AxiosError } from 'axios';
import { ISignIn, ISignUp } from '../../types/userApi';

import authApi from '../../api/main/authApi';
import userApi from '../../api/main/userApi';
import { setUser, setUsers } from './userSlice';

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
        (error as AxiosError).message,
        (error as AxiosError<{ message: string }>).response?.data.message,
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
        (error as AxiosError).message,
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

export const getAllUsersThunk = createAsyncThunk(
  'user/getAllUsers',
  async (params, { dispatch }) => {
    try {
      dispatch(setUsers([]));
      const users = await userApi.getAllUsers();
      // Alert.alert('user', JSON.stringify(user, null, 2));
      dispatch(setUsers(users));
    } catch (error) {
      Alert.alert(
        (error as AxiosError).message,
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);

export const deleteUserThunk = createAsyncThunk<unknown, number>(
  'user/deleteUser',
  async (id, { dispatch }) => {
    try {
      const result = await userApi.deleteOneUser(id);
      // Alert.alert('user', JSON.stringify(user, null, 2));
      if (result) {
        const users = await userApi.getAllUsers();
        dispatch(setUsers(users));
      }
    } catch (error) {
      Alert.alert(
        (error as AxiosError).message,
        (error as AxiosError<{ message: string }>).response?.data.message,
      );
    }
  },
);
