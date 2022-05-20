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
import { IUserDataChange } from '../../types/userApi';

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
      <FormItem formik={formik} itemName="firstName" itemLabel="NAME" />
      <FormItem formik={formik} itemName="lastName" itemLabel="SURNAME" />
      <FormItem formik={formik} itemName="login" itemLabel="LOGIN" />
      {inputFields.map(({ name, label }) => (
        <FormItem key={name} formik={formik} itemName={name} value={formik.value[name]} itemLabel={label} />
      ))}
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

const inputFields = [
  {
    name: 'email',
    label: 'Email',
  },
];

export default UserDataChangeForm;
