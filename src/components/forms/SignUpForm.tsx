import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { theme } from '../../theme';
import validation from '../../utils/validation';
import FormItem from '../FormItem';
import FormButton from '../FormButton';
import { ISignUp } from '../../types/userApi';

type Props = {
  initialValues: ISignUp;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: ISignUp) => void;
};

const validationSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
  firstName: validation.firstName,
  lastName: validation.lastName,
  login: validation.login,
});

const SignUpForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.сontainer}>
      <FormItem formik={formik} itemName="email" itemLabel="EMAIL"/>
      <FormItem formik={formik} itemName="password" itemLabel="PASSWORD" secureTextEntry/>
      <FormItem formik={formik} itemName="firstName" itemLabel="NAME"/>
      <FormItem formik={formik} itemName="lastName" itemLabel="SURNAME"/>
      <FormItem formik={formik} itemName="login" itemLabel="LOGIN"/>
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

export default SignUpForm;
