import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';

import CustomText from './CustomText';
import { styles } from './CustomTextInput.styles';

type Props = {
  value: string,
  error: string | undefined | string[],
  touched?: boolean,
  onChangeText: (text: string) => void | undefined,
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined,
  itemLabel?: string,
  secureTextEntry?: boolean
};

const CustomTextInput: React.FC<Props> = (props) => {
  return (
    <>
      <CustomText
        style={
          (props.error && props.touched)
            ? styles.labelerror
            : styles.label
        }
      >
        {
          (props.error && props.touched)
            ? `${props.itemLabel}: ${props.error}`
            : `${props.itemLabel}:`
        }
      </CustomText>

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

CustomTextInput.defaultProps = {
  touched: false,
};

export default CustomTextInput;
