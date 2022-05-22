import React, { useEffect } from 'react';
import {
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { getAllUsersThunk } from '../../../store/user/userThunks';
import { IUser } from '../../../types/userTypes';
import Loading from '../Loading';
import UserItem from './UserItem';

const renderUser: ListRenderItem<IUser> = ({ item }) => (
  <UserItem user={item}/>
);

const handleKeyExtractor = (item: IUser) => item.email;

const UserList: React.FC = () => {
  const users = useTypedSelector(({ user }) => user.users);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getAllUsersThunk());
  }, [dispatch]);

  if (!users.length) {
    return <Loading />;
  }
  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={handleKeyExtractor}
      />
    </View>
  );
};

export default UserList;
