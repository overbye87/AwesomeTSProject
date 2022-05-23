import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { theme } from '../../../styles/theme';
import validation from '../../../../utils/validation';
import Button from '../../../components/Button';
import { IUserDataChange } from '../../../../types/userApi';
import CustomTextInput from '../../../components/CustomTextInput';
import { getInputProps } from '../../../../utils/utils';

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
      <Button
        onPress={formik.handleSubmit}
        buttonLabel="SUBMIT"
        disabled={Boolean(Object.keys(formik.errors).length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default UserDataChangeForm;
