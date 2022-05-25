import React from 'react';
import { Text } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import validation from '../../../../utils/validation';
import Button from '../../../components/Button';
import { ISignUp } from '../../../../types/userApi';
import CustomTextInput from '../../../components/CustomTextInput';
import { getInputProps } from '../../../../utils/utils';

type Props = {
  initialValues: ISignUp;

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
    <>
      <CustomTextInput
        itemLabel="EMAIL"
        {...getInputProps(formik, 'email')}
      />
      <CustomTextInput
        secureTextEntry
        itemLabel="PASSWORD"
        {...getInputProps(formik, 'password')}
      />
      <CustomTextInput
        itemLabel="NAME"
        {...getInputProps(formik, 'firstName')}
      />
      <CustomTextInput
        itemLabel="SURNAME"
        {...getInputProps(formik, 'lastName')}
      />
      <CustomTextInput
        itemLabel="LOGIN"
        {...getInputProps(formik, 'login')}
      />
      <Button
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
      >
        <Text>SUBMIT</Text>
      </Button>
    </>
  );
};

export default SignUpForm;
