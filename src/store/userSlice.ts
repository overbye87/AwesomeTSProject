/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/userTypes';
import type { RootState } from './store';

interface IInitial {
  user: null | IUser,
}

const initialState: IInitial = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (store, action: PayloadAction<IUser | null>) => {
      store.user = action.payload;
      return store;
    },
  },
});

export const {
  setUser,
} = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
