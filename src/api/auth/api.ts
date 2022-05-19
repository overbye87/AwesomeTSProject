import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../../types/userTypes';
import { authAxios, setToken } from './axios';
import { ISignIn, ISignUp } from '../../types/userApi';

const saveToken = async (data: any) => {
  const { token } = data;
  await AsyncStorage.setItem('token', token);
  setToken(token);
  return data;
};

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const data = await authAxios.post('/auth', SignInData);
  await saveToken(data);
  return data.data;
};

export const signUp = async (SignUpData : ISignUp): Promise<IUser> => {
  const data = await authAxios.post('/auth/signup', SignUpData);
  await saveToken(data);
  return data.data;
};

export const getAllUsers = async (): Promise<IUser[]> => {
  const data = await authAxios.get('/users');
  return data.data;
};

export const getOneUser = async (id: number): Promise<IUser> => {
  const data = await authAxios.get(`/users/${id}`);
  return data.data;
};

export const deleteOneUser = async (id: number): Promise<boolean> => {
  const data = await authAxios.delete(`/users/${id}`);
  return data.data;
};

export const addOneUser = async (SignUpData : ISignUp): Promise<IUser> => {
  const data = await authAxios.post('/users/add', SignUpData);
  return data.data;
};

export default {
  signIn,
  signUp,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  addOneUser,
};
