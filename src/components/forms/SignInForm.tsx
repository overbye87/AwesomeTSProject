import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

import { theme } from '../../theme';
import validation from '../../utils/validation';
import FormButton from '../FormButton';
import { ISignIn } from '../../types/userApi';
import CustomTextInput from '../CustomTextInput';
import { getInputProps } from '../../utils/utils';

type Props = {
  initialValues: ISignIn;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ISignIn) => void;
};

const validationSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
});

const SignInForm: React.FC<Props> = (props) => {
  const formik: FormikProps<ISignIn> = useFormik<ISignIn>({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.сontainer}>
      <CustomTextInput
        itemLabel="EMAIL"
        {...getInputProps(formik, 'email')}
      />
      <CustomTextInput
        secureTextEntry
        itemLabel="PASSOWRD"
        {...getInputProps(formik, 'password')}
      />
      <FormButton formik={formik} buttonLabel="SUBMIT"/>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
});

export default SignInForm;
