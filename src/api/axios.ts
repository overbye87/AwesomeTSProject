import axios, { HeadersDefaults, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from '../config';

const apiInstance = axios.create({
  baseURL: config.pokemonUrl,
});

export const setToken = (token: string) => {
  if (!apiInstance.defaults.headers) {
    apiInstance.defaults.headers = {} as HeadersDefaults;
  }

  (apiInstance.defaults.headers as HeadersDefaults & { 'x-access-token': string })['x-access-token'] = token;
};

apiInstance.interceptors.request.use(
  async (config) => {
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    //   config.headers!['x-access-token'] = `${token}`;
    // }
    return config;
  },
);

apiInstance.interceptors.response.use(
  (response) => {
    // console.log('x-access-token', response.data['x-access-token']);
    return response.data;
  },
);

export default apiInstance;
