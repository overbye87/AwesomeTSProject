import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from '../types/userTypes';
import { authAxios, setToken } from './axios';
import { ISignIn } from './interfaces';

const saveToken = async (data: any) => {
  const { token } = data;
  console.log('token', token);
  await AsyncStorage.setItem('token', token);
  setToken(token);
  return data;
};

export const signIn = async (SignInData : ISignIn): Promise<IUser> => {
  const data = await authAxios.post('/auth', SignInData).then(saveToken);
  return data.data;
};

export default {
  signIn,
};
