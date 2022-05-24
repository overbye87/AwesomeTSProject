import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToHeaders } from '../api/main/axios';

export const setToken = async (token: string) => {
  await AsyncStorage.setItem('token', token);
  addTokenToHeaders(token);
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

export const removeToken = async () => {
  AsyncStorage.removeItem('token');
};
