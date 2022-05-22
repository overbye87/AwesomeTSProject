import { FormikProps } from 'formik';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../theme';

type Props = {
  formik: FormikProps<any>,
  buttonLabel?: string,
};

const FormButton: React.FC<Props> = (props) => {
  return (
    <>
      <TouchableOpacity
        disabled={Boolean(Object.keys(props.formik.errors).length)}
        style={styles.button}
        onPress={props.formik.handleSubmit}>
        <Text style={styles.buttonText}>
          {props.buttonLabel}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default FormButton;
