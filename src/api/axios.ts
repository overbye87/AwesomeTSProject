import axios, { HeadersDefaults, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from '../config';

const pokemonAxios = axios.create({
  baseURL: config.pokemonUrl,
});

const authAxios = axios.create({
  baseURL: config.authUrl,
});

const setToken = (token: string) => {
  if (!authAxios.defaults.headers) {
    authAxios.defaults.headers = {} as HeadersDefaults;
  }
  (authAxios.defaults.headers as HeadersDefaults & { 'x-access-token': string })['x-access-token'] = token;
  // authAxios.defaults.headers.Authorization = `Bearer ${token}`;
};

// pokemonAxios.interceptors.request.use(
//   async (config) => {
//     // const token = await AsyncStorage.getItem('token');
//     // if (token) {
//     //   config.headers!['x-access-token'] = `${token}`;
//     // }
//     return config;
//   },
// );

authAxios.interceptors.response.use(
  (response) => {
    // console.log('x-access-token', response.data['x-access-token']);
    return response.data;
  },
  
);

export default {
  pokemonAxios,
  authAxios,
  setToken,
};
