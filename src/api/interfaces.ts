import { IPokemonData } from '../types/pokemonsTypes';

export interface ISaveToken {
  token: string,
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface ISignInResponce extends ISaveToken{
  status: boolean,
  user: { id: number, name: string }
}

export interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}

export interface IPokemonFullDataArray {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemonData[];
}
