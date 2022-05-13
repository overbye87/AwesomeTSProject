/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IParams, IPokemonsArray } from '../types/pokemonsTypes';
import type { RootState } from './store';

interface IInitial {
  pokemonsArray: IPokemonsArray;
  params: IParams;
}

const initialState: IInitial = {
  pokemonsArray: [],
  params: { limit: 10, offset: 0 },
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (store, action: PayloadAction<IPokemonsArray>) => {
      store.pokemonsArray = action.payload;
      return store;
    },
    addPokemons: (store, action: PayloadAction<IPokemonsArray>) => {
      store.pokemonsArray = store.pokemonsArray.concat(action.payload);
      return store;
    },
    setParams: (store, action: PayloadAction<IParams>) => {
      store.params = action.payload;
      return store;
    },
  },
});

export const {
  setPokemons,
  addPokemons,
  setParams,
} = pokemonsSlice.actions;

export const pokemons = (state: RootState) => state.pokemons;

export default pokemonsSlice.reducer;
