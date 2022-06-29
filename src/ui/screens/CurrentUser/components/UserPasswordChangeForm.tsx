import React from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';

import validation from '../../../../utils/validation';
import CustomButton from '../../../components/CustomButton';
import { IPasswordChange } from '../../../../types/userApi';
import CustomTextInput from '../../../components/CustomTextInput';
import { getInputProps } from '../../../../utils/utils';
import { styles } from './UserPasswordChangeForm.styles';
import CustomText from '../../../components/CustomText';

type Props = {
  initialValues: IPasswordChange;
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
      <CustomButton
        onPress={formik.handleSubmit}
        disabled={!formik.isValid}
      >
        <CustomText>SUBMIT</CustomText>
      </CustomButton>
    </View>
  );
};

export default UserPasswordChangeForm;
