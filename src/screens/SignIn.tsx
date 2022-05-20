import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useTypedDispatch } from '../store/store';
import { signInThunk } from '../store/user/userThunks';
import { theme } from '../theme';
import { NavigationCommon } from '../App';
import { ISignIn } from '../types/userApi';
import Logo from '../components/Logo';
import SignInForm from '../components/forms/SignInForm';

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
    <View style={styles.сontainer}>
      <Logo iconName="log-in-outline"/>
    </View>
    <View style={styles.сontainer}>
      <SignInForm initialValues={initialValues} onSubmit={handleSubmit}/>
    </View>
  </>

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
  image: {
    width: 257,
    height: 103,
  },
});

export default SignIn;
