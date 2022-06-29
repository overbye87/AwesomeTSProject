import React from 'react';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useKeyboardVisible } from '../../utils/hooks/useKeyboardVisible';
import { styles } from './Logo.styles';

type Props = {
  iconName?: string;
  children?: React.ReactNode;
};

const Logo: React.FC<Props> = (props) => {
  const { keyboardVisible } = useKeyboardVisible();
  return (
    <View style={keyboardVisible ? styles.small : styles.logo}>
      {props.iconName && (
        <Ionicons name={props.iconName} size={keyboardVisible ? 60 : 80} />
      )}
      {props.children}
    </View>
  );
};

export default Logo;
