import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useTypedDispatch } from '../../../store/store';
import { signInThunk } from '../../../store/user/userThunks';
import { ISignIn } from '../../../types/userApi';
import Logo from '../../components/Logo';
import Form from './components/Form';
import { styles } from './SignIn.styles';
import { useKeyboardVisible } from '../../../utils/hooks/useKeyboardVisible';
import { NavigationCommonStack } from '../../../navigation/CommonNavigator';

const initialValues: ISignIn = {
  email: 'admin@admin.ru',
  password: 'admin',
};

const SignIn: React.FC = () => {
  const { keyboardVisible } = useKeyboardVisible();
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommonStack<'SignIn'>>();

  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
    navigate('Main');
  };

  return (
  <>
    <View style={keyboardVisible ? styles.smallLogoContainer : styles.logoContainer}>
      <Logo iconName="log-in-outline"/>
    </View>
    <View style={styles.сontainer}>
      <Form initialValues={initialValues} onSubmit={handleSubmit}/>
    </View>
  </>
  );
};

export default SignIn;
