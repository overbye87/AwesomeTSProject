import { IUser } from '../../types/userTypes';
import { authAxios } from './axios';
import { ISignUp } from '../../types/userApi';

export const getAllUsers = async (): Promise<IUser[]> => {
  const data = await authAxios.get('/users');
  return data.data;
};

export const getOneUser = async (id: number): Promise<IUser> => {
  const data = await authAxios.get(`/users/${id}`);
  return data.data;
};

export const deleteOneUser = async (id: number): Promise<boolean> => {
  const data = await authAxios.delete(`/users/${id}`);
  return data.data;
};

export const addOneUser = async (SignUpData : ISignUp): Promise<IUser> => {
  const data = await authAxios.post('/users/add', SignUpData);
  return data.data;
};

export default {
  getAllUsers,
  getOneUser,
  deleteOneUser,
  addOneUser,
};
