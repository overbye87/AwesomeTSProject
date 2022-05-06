import axios, { HeadersDefaults } from 'axios';
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
};

pokemonAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
);

export {
  pokemonAxios,
  authAxios,
  setToken,
};
