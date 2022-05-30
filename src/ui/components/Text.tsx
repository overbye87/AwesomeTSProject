import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as ReactText,
  TextStyle,
} from 'react-native';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>,
};

const Text: React.FC<Props> = ({ children, style}) => {
  return (
    <ReactText style={[styles.text, style]}>
      {children}
    </ReactText>
  );
};

Text.defaultProps = {
  children: null,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 15,
    fontFamily: 'PressStart2P-Regular',
  },
});

export default Text;
