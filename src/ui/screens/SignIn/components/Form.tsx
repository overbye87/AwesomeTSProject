import React from 'react';
import { Text } from 'react-native';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

import { getInputProps } from '../../../../utils/utils';
import { ISignIn } from '../../../../types/userApi';
import validation from '../../../../utils/validation';
import CustomTextInput from '../../../components/CustomTextInput';
import Button from '../../../components/Button';

type Props = {
  initialValues: ISignIn;

  onSubmit: (values: ISignIn) => void;
};

const validationSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
});

const Form: React.FC<Props> = (props) => {
  const formik: FormikProps<ISignIn> = useFormik<ISignIn>({
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
        itemLabel="PASSOWRD"
        {...getInputProps(formik, 'password')}
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

export default Form;
