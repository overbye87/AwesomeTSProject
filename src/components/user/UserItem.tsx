import React from 'react';
import {
  Alert, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTypedDispatch } from '../../store/store';
import { deleteUserThunk } from '../../store/user/userThunks';
import { theme } from '../../theme';
import { IUser } from '../../types/userTypes';

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
      <Ionicons name={'person-circle-outline'} size={80}/>
      <View style={styles.textContainer}>
        <Text style={styles.id}>ID:{props.user.id}</Text>
        <Text style={styles.email}>{props.user.email}</Text>
        <Text>{props.user.firstName}</Text>
        <Text>{props.user.lastName}</Text>
        <Text style={styles.login}>{props.user.login}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deletionСonfirmation(props.user)}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>
      </View>
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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  email: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  login: {
    textTransform: 'uppercase',
  },
  deleteButton: {
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default UserItem;
