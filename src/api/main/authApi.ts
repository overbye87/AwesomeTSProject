import { IUser } from '../../types/userTypes';
import { authAxios } from './axios';
import { ISignIn, ISignUp } from '../../types/userApi';
import { setToken } from '../../utils/token';

type IResp = {token: string, data: IUser}

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth', SignInData);
  await setToken(token);
  return data;
};

export const signUp = async (SignUpData : ISignUp): Promise<IUser> => {
  const { token, data } = await authAxios.post<any, IResp>('/auth/signup', SignUpData);
  await setToken(token);
  return data;
};

export default {
  signIn,
  signUp,
};
