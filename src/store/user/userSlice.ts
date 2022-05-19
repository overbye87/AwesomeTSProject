/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/userTypes';
import type { RootState } from '../store';

interface IInitial {
  currentUser: null | IUser,
  users: IUser[],
}

const initialState: IInitial = {
  currentUser: null,
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (store, action: PayloadAction<IUser | null>) => {
      store.currentUser = action.payload;
      return store;
    },
    setUsers: (store, action: PayloadAction<IUser[]>) => {
      store.users = action.payload;
      return store;
    },
  },
});

export const {
  setUser,
  setUsers,
} = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
