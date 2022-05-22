import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { theme } from '../../theme';
import validation from '../../utils/validation';
import FormButton from '../FormButton';
import { IPasswordChange } from '../../types/userApi';
import CustomTextInput from '../CustomTextInput';
import { getInputProps } from '../../utils/utils';

type Props = {
  initialValues: IPasswordChange;
  // eslint-disable-next-line no-unused-vars
  onSubmit: (values: IPasswordChange) => void;
};

const validationSchema = yup.object().shape({
  oldPassword: validation.password,
  newPassword: validation.password,
});

const UserPasswordChangeForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: props.onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.сontainer}>
      <CustomTextInput
        secureTextEntry
        itemLabel="OLD PASSWORD"
        {...getInputProps(formik, 'oldPassword')}
      />
      <CustomTextInput
        secureTextEntry
        itemLabel="NEW PASSWORD"
        {...getInputProps(formik, 'newPassword')}
      />
      <FormButton formik={formik} buttonLabel="CHANGE"/>
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

export default UserPasswordChangeForm;
