import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useTypedDispatch } from '../../../store/store';
import { ISignUp } from '../../../types/userApi';
import { signUpThunk } from '../../../store/user/userThunks';
import Form from './components/Form';
import Logo from '../../components/Logo';
import { styles } from './SignUp.styles';
import { useKeyboardVisible } from '../../../utils/hooks/useKeyboardVisible';
import { NavigationCommonStack } from '../../../navigation/CommonNavigator';

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
  const { navigate } = useNavigation<NavigationCommonStack<'SignUp'>>();

  const handleSubmit = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
    navigate('Main');
  };

  return (
    <>
      <View style={keyboardVisible ? styles.smallLogoContainer : styles.logoContainer}>
        <Logo iconName="person-add" />
      </View>
      <View style={styles.сontainer}>
        <Form initialValues={initialValues} onSubmit={handleSubmit}/>
      </View>
    </>
  );
};

export default SignUp;
