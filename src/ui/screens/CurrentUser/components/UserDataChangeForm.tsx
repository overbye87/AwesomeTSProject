import React from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import validation from '../../../../utils/validation';
import CustomButton from '../../../components/CustomButton';
import { IUserDataChange } from '../../../../types/userApi';
import CustomTextInput from '../../../components/CustomTextInput';
import { getInputProps } from '../../../../utils/utils';
import { styles } from './UserDataChangeForm.styles';
import CustomText from '../../../components/CustomText';

type Props = {
  initialValues: IUserDataChange;
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
      <CustomButton
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
      >
        <CustomText>SUBMIT</CustomText>
      </CustomButton>
    </View>
  );
};

export default UserDataChangeForm;
