import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://pokeapi.co/api/v2/';

const instance = axios.create();

instance.defaults.baseURL = baseURL;

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers!['x-access-token'] = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log('x-access-token', response.data['x-access-token']);
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
