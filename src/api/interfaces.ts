import { IPokemonData } from '../types/pokemonsTypes';
import { IUser } from '../types/userTypes';

export interface ISaveToken {
  token: string,
}

export interface ISignIn {
  email: string,
  password: string,
}

export interface ISignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
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
