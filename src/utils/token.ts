import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToHeaders } from '../api/main/axios';

const TOKEN_KEY = 'token';

export const setToken = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  addTokenToHeaders(token);
};

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};

export const removeToken = async () => {
  AsyncStorage.removeItem(TOKEN_KEY);
};
