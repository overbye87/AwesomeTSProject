/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface IInitial {
  isKeyboardVisible: boolean,
}

const initialState: IInitial = {
  isKeyboardVisible: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setKeyboardVisible: (store, action: PayloadAction<boolean>) => {
      store.isKeyboardVisible = action.payload;
      return store;
    },
  },
});

export const {
  setKeyboardVisible,
} = appSlice.actions;

export const app = (state: RootState) => state.app;

export default appSlice.reducer;
