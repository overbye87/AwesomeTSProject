import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useTypedDispatch } from '../../../store/store';
import { signInThunk } from '../../../store/user/userThunks';
import { NavigationCommon } from '../../../App';
import { ISignIn } from '../../../types/userApi';
import Logo from '../../components/Logo';
import Form from './components/Form';
import { styles } from './SignIn.styles';

const initialValues: ISignIn = {
  email: 'admin@admin.ru',
  password: 'admin',
};

const SignIn: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommon<'SignIn'>>();

  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
    navigate('Main');
  };

  return (
  <>
    <View style={styles.logoContainer}>
      <Logo iconName="log-in-outline"/>
    </View>
    <View style={styles.сontainer}>
      <Form initialValues={initialValues} onSubmit={handleSubmit}/>
    </View>
  </>
  );
};

export default SignIn;
