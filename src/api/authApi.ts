import AsyncStorage from '@react-native-async-storage/async-storage';
import { authAxios, setToken } from './axios';

const saveToken = async (res: any) => {
  const { token } = res;
  await AsyncStorage.setItem('token', token);
  setToken(token);
  return res;
};

interface ISignIn {
  username: string,
  password: string,
}

export const signIn = (data : ISignIn) => {
  return authAxios.post('/auth', data).then(saveToken);
};
