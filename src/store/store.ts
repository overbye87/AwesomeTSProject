import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import cameraSlice from './camera/cameraSlice';
import pokemonsSlice from './pokemons/pokemonsSlice';
import userSlice from './user/userSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
    user: userSlice,
    camera: cameraSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
