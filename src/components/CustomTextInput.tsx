import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { theme } from '../theme';

type Props = {
  value: string,
  error: string | undefined | string[],
  touched: boolean | undefined,
  handleChange: (e: string) => void,
  handleBlur: (e: string) => void,
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
        onChangeText={props.handleChange}
        onBlur={props.handleBlur}
        value={props.value}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 10,
    padding: 0,
  },
  label: {
    width: 330,
    color: theme.color.gray,
    fontSize: 15,
    textAlign: 'left',
  },
  labelerror: {
    width: 330,
    color: theme.color.red,
    fontSize: 15,
    textAlign: 'left',
  },
});

export default CustomTextInput;
