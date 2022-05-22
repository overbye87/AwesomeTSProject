import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { useTypedDispatch } from '../../store/store';
import { theme } from '../../theme';
import { NavigationCommon } from '../../App';
import { ISignUp } from '../../types/userApi';
import { signUpThunk } from '../../store/user/userThunks';
import SignUpForm from '../components/forms/SignUpForm';
import Logo from '../components/Logo';

const initialValues: ISignUp = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

const SignUp: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommon<'SignUp'>>();

  const handleSubmit = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
    navigate('Main');
  };

  return (
    <>
      <View style={styles.сontainer}>
        <Logo iconName="person-add"/>
      </View>
      <View style={styles.сontainer}>
        <SignUpForm initialValues={initialValues} onSubmit={handleSubmit}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
});

export default SignUp;
