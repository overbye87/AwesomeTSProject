import { FormikProps } from 'formik';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { theme } from '../theme';

type Props = {
  formik: FormikProps<any>,
  itemName: string,
  itemLabel?: string,
  secureTextEntry?: boolean
};

const FormItem: React.FC<Props> = (props) => {
  return (
    <>
      <Text style={
          props.formik.errors[props.itemName]
          && props.formik.touched[props.itemName]
            ? styles.labelerror
            : styles.label
        }>
        {
          props.formik.errors[props.itemName]
          && props.formik.touched[props.itemName]
            ? `${props.itemLabel}: ${props.formik.errors[props.itemName]}`
            : `${props.itemLabel}:`
        }
      </Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={styles.input}
        placeholder={props.itemLabel}
        onChangeText={props.formik.handleChange(props.itemName)}
        onBlur={props.formik.handleBlur(props.itemName)}
        value={props.formik.values[props.itemName]}
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

export default FormItem;
