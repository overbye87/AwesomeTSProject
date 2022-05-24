import React from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import validation from '../../../../utils/validation';
import Button from '../../../components/Button';
import { IUserDataChange } from '../../../../types/userApi';
import CustomTextInput from '../../../components/CustomTextInput';
import { getInputProps } from '../../../../utils/utils';
import { styles } from './UserDataChangeForm.styles';

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

export default UserDataChangeForm;
