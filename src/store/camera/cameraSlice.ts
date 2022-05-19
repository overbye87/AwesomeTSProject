/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PhotoFile } from 'react-native-vision-camera';
import type { RootState } from '../store';

interface IInitial {
  results: PhotoFile[],
}

const initialState: IInitial = {
  results: [],
};

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    setResult: (store, action: PayloadAction<PhotoFile>) => {
      store.results = [...store.results, action.payload];
      return store;
    },
  },
});

export const {
  setResult,
} = cameraSlice.actions;

export const camera = (state: RootState) => state.camera;

export default cameraSlice.reducer;
