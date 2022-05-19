import axios from 'axios';
import { config } from '../../config';

const pokemonAxios = axios.create({
  baseURL: config.pokemonUrl,
});

pokemonAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
);

export {
  pokemonAxios,
};
