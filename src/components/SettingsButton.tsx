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

const SettingsButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={styles.settings}
      onPress={props.onPress}>
      <Ionicons name="settings-outline" size={40}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settings: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});

export default SettingsButton;
