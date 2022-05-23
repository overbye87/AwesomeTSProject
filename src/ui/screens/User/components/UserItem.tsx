import React from 'react';
import {
  Alert, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTypedDispatch } from '../../../../store/store';
import { deleteUserThunk } from '../../../../store/user/userThunks';
import { theme } from '../../../styles/theme';
import { IUser } from '../../../../types/userTypes';

type Props = {
  user: IUser;
};

const UserItem: React.FC<Props> = (props) => {
  const dispatch = useTypedDispatch();

  const deletionСonfirmation = (user: IUser) => Alert.alert(
    'Warning!',
    `You want to delete the user:\n${user.email}\nThis action cannot be reversed.\nUser will be deleted permanently.\nConfirm the delete action`,
    [
      { text: 'DELETE', onPress: () => dispatch(deleteUserThunk(user.id)) },
      { text: 'CANCEL', onPress: () => null },
    ],
  );

  return (
    <View style={styles.сontainer}>
      <Ionicons style={styles.image} name={'person-outline'} size={80}/>
      <Text style={styles.id}>ID:{props.user.id}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.email}>{props.user.email}</Text>
        {props.user.firstName && <Text>{props.user.firstName}</Text>}
        {props.user.lastName && <Text>{props.user.lastName}</Text>}
        {props.user.login && <Text style={styles.login}>{props.user.login}</Text>}
      </View>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deletionСonfirmation(props.user)}>
      <Text style={styles.buttonText}>DELETE</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  image: {
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    padding: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  email: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  login: {
    alignSelf: 'flex-start',
    backgroundColor: theme.color.headerDark,
    color: theme.color.white,
    borderRadius: 5,
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    textTransform: 'uppercase',
  },
  deleteButton: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default UserItem;
