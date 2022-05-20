import { useFormik } from 'formik';
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
import { IPasswordChange } from '../../types/userApi';

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
      <FormItem formik={formik} itemName="oldPassword" itemLabel="OLD PASSWORD" secureTextEntry/>
      <FormItem formik={formik} itemName="newPassword" itemLabel="NEW PASSWORD" secureTextEntry/>
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
