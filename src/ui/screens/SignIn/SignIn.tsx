import React from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';

import { styles } from './SignIn.styles';

import { useTypedDispatch } from '../../../store/store';
import { signInThunk } from '../../../store/user/userThunks';
import { ISignIn } from '../../../types/userApi';
import SignInForm from './components/SignInForm';
import { useKeyboardVisible } from '../../../utils/hooks/useKeyboardVisible';
import LockSvg from './assets/lock-padlock-protection-svgrepo-com.svg';
import CustomText from '../../components/CustomText';

const initialValues: ISignIn = {
  email: 'admin@admin.ru',
  password: 'admin',
};

const SignIn: React.FC = () => {
  const { keyboardVisible } = useKeyboardVisible();
  const dispatch = useTypedDispatch();

  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
  };

  return (
    <>
      <View style={keyboardVisible ? styles.smallLogoContainer : styles.logoContainer}>
        <LockSvg width={220} height={220} />
        {/* <Logo iconName="log-in-outline"/> */}
      </View>
      <View style={styles.сontainer}>
        <SignInForm initialValues={initialValues} onSubmit={handleSubmit} />
        <CustomText style={styles.signUpText}>
          {'No account? '}
          <Link style={styles.signUpLink} to={{ screen: 'SignUp' }}>
            SIGN UP
          </Link>
        </CustomText>
      </View>
    </>
  );
};

export default SignIn;
