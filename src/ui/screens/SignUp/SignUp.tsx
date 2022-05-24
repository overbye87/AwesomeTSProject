import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { NavigationCommon } from '../../../App';
import { ISignUp } from '../../../types/userApi';
import { signUpThunk } from '../../../store/user/userThunks';
import Form from './components/Form';
import Logo from '../../components/Logo';
import { styles } from './SignUp.styles';

const initialValues: ISignUp = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

const SignUp: React.FC = () => {
  const isKeyboardVisible = false;
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommon<'SignUp'>>();

  const handleSubmit = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
    navigate('Main');
  };

  return (
    <>
      <View style={isKeyboardVisible ? styles.smallLogoContainer : styles.logoContainer}>
        <Logo iconName="person-add" small={isKeyboardVisible}/>
      </View>
      <View style={styles.сontainer}>
        <Form initialValues={initialValues} onSubmit={handleSubmit}/>
      </View>
    </>
  );
};

export default SignUp;
