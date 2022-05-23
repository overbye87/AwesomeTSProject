import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Keyboard, View } from 'react-native';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { NavigationCommon } from '../../../App';
import { ISignUp } from '../../../types/userApi';
import { signUpThunk } from '../../../store/user/userThunks';
import Form from './components/Form';
import Logo from '../../components/Logo';
import { styles } from './SignUp.styles';
import { setKeyboardVisible } from '../../../store/app/appSlice';

const initialValues: ISignUp = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

const SignUp: React.FC = () => {
  const isKeyboardVisible = useTypedSelector(({ app }) => app.isKeyboardVisible);
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommon<'SignUp'>>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        dispatch(setKeyboardVisible(true));
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        dispatch(setKeyboardVisible(false));
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [dispatch]);

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
