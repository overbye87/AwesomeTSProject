import React from 'react';
import { View } from 'react-native';

import { styles } from './SignUp.styles';

import { useTypedDispatch } from '../../../store/store';
import { ISignUp } from '../../../types/userApi';
import { signUpThunk } from '../../../store/user/userThunks';
import SignUpForm from './components/SignUpForm';
import Logo from '../../components/Logo';
import { useKeyboardVisible } from '../../../utils/hooks/useKeyboardVisible';

const initialValues: ISignUp = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

const SignUp: React.FC = () => {
  const { keyboardVisible } = useKeyboardVisible();
  const dispatch = useTypedDispatch();

  const handleSubmit = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
  };

  return (
    <>
      <View style={keyboardVisible ? styles.smallLogoContainer : styles.logoContainer}>
        <Logo iconName="person-add" />
      </View>
      <View style={styles.сontainer}>
        <SignUpForm initialValues={initialValues} onSubmit={handleSubmit}/>
      </View>
    </>
  );
};

export default SignUp;
