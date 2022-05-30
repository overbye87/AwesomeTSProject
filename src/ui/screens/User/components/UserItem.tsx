import React from 'react';
import {
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTypedDispatch } from '../../../../store/store';
import { deleteUserThunk } from '../../../../store/user/userThunks';
import { IUser } from '../../../../types/userTypes';
import Text from '../../../components/Text';
import { styles } from './UserItem.styles';

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

export default UserItem;
