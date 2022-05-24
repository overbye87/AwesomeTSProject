import axios, { HeadersDefaults } from 'axios';
import { config } from '../../config';

const authAxios = axios.create({
  baseURL: config.authUrl,
  timeout: 1000,
});

authAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
);

const addTokenToHeaders = (token: string) => {
  if (!authAxios.defaults.headers) {
    authAxios.defaults.headers = {} as HeadersDefaults;
  }
  (authAxios.defaults.headers as HeadersDefaults & { 'x-access-token': string })['x-access-token'] = token;
};

export {
  authAxios,
  addTokenToHeaders,
};
