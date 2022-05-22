import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { theme } from '../../../theme';
import validation from '../../../utils/validation';
import FormButton from '../FormButton';
import { IUserDataChange } from '../../../types/userApi';
import CustomTextInput from '../CustomTextInput';
import { getInputProps } from '../../../utils/utils';

type Props = {
  initialValues: IUserDataChange;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: IUserDataChange) => void;
};

const validationSchema = yup.object().shape({
  firstName: validation.firstName,
  lastName: validation.lastName,
  login: validation.login,
});

const UserDataChangeForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.сontainer}>
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
      <FormButton formik={formik} buttonLabel="SUBMIT" />
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

export default UserDataChangeForm;
