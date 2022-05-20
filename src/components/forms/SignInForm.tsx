/* eslint-disable dot-notation */
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { theme } from '../../theme';
import validation from '../../utils/validation';
import FormItem from '../CustomTextInput';
import FormButton from '../FormButton';
import { ISignIn } from '../../types/userApi';
import CustomTextInput from '../CustomTextInput';

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
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validationSchema,
  });

  // eslint-disable-next-line no-shadow
  const getInputProps = (formik: FormikProps<any>, name: string) => ({
    value: formik.values[name],
    error: formik.errors[name],
    touched: formik.touched[name],
    handleChange: formik.handleChange(name),
    handleBlur: formik.handleBlur(name),
  });

  return (
    <View style={styles.сontainer}>
      <CustomTextInput
        itemLabel="EMAIL"
        {...getInputProps(formik, 'email')}
      />
      <CustomTextInput formik={formik} itemName="password" itemLabel="PASSWORD" secureTextEntry/>
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
