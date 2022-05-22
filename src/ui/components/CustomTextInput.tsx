import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';

import { theme } from '../../theme';

type Props = {
  value: string,
  error: string | undefined | string[],
  touched: boolean | undefined,
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void | undefined,
  // eslint-disable-next-line no-unused-vars
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void | undefined,
  itemLabel?: string,
  secureTextEntry?: boolean
};

const CustomTextInput: React.FC<Props> = (props) => {
  return (
    <>
      <Text
        style={
          props.error
            && props.touched
            ? styles.labelerror
            : styles.label
        }
      >
        {
          (
            props.error
            && props.touched
          )
            ? `${props.itemLabel}: ${props.error}`
            : `${props.itemLabel}:`
        }
      </Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={styles.input}
        placeholder={props.itemLabel}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        value={props.value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: theme.fontSize.main,
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 10,
    padding: 0,
  },
  label: {
    width: 330,
    color: theme.color.gray,
    fontSize: theme.fontSize.label,
    textAlign: 'left',
  },
  labelerror: {
    width: 330,
    color: theme.color.red,
    fontSize: theme.fontSize.label,
    textAlign: 'left',
  },
});

export default CustomTextInput;
