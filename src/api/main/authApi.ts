import { IUser } from '../../types/userTypes';
import { addTokenToHeaders, authAxios } from './axios';
import { ISignIn, ISignUp } from '../../types/userApi';
import storage from '../../utils/storage';

type IResp = {token: string, data: IUser}

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth', SignInData);
  await storage.token.set(token);
  addTokenToHeaders(token);
  return data;
};

export const signUp = async (SignUpData : ISignUp): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth/signup', SignUpData);
  await storage.token.set(token);
  return data;
};

export default {
  signIn,
  signUp,
};
