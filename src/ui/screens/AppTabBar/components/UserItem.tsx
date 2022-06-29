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
import CustomText from '../../../components/CustomText';
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
      <CustomText style={styles.id}>ID:{props.user.id}</CustomText>
      <View style={styles.textContainer}>
        <CustomText style={styles.email}>{props.user.email}</CustomText>
        {props.user.firstName && <CustomText>{props.user.firstName}</CustomText>}
        {props.user.lastName && <CustomText>{props.user.lastName}</CustomText>}
        {props.user.login && <CustomText style={styles.login}>{props.user.login}</CustomText>}
      </View>
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => deletionСonfirmation(props.user)}>
      <CustomText style={styles.buttonText}>DELETE</CustomText>
    </TouchableOpacity>
    </View>
  );
};

export default UserItem;
