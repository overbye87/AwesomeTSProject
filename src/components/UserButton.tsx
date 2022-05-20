import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  buttonLabel?: string,
  onPress?: () => void,
  disabled?: boolean,
};

const UserButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.user}
      onPress={props.onPress}>
      <Ionicons name="person-circle-outline" size={40}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  user: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
});

export default UserButton;
