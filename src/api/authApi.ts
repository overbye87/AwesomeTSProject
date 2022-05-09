import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAxios, setToken } from './axios';
import { ISignIn, ISignInResponce } from './interfaces';

const saveToken = async (data: any) => {
  const { token } = data;
  console.log('token', token);
  await AsyncStorage.setItem('token', token);
  setToken(token);
  return data;
};

export const signIn = (SignInData : ISignIn): Promise<ISignInResponce> => {
  return authAxios.post('/auth', SignInData).then(saveToken);
};

export default {
  signIn,
};
