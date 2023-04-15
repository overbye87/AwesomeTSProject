import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Link } from '@react-navigation/native';

import { styles } from './SignIn.styles';

import { useTypedDispatch } from '../../../store/store';
import { signInThunk } from '../../../store/user/userThunks';
import { ISignIn } from '../../../types/userApi';
import SignInForm from './components/SignInForm';
import LockSvg from './assets/lock-padlock-protection-svgrepo-com.svg';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import { config } from '../../../config';
import storage from '../../../utils/storage';
import { addBaseURL } from '../../../api/main/axios';

const initialValues: ISignIn = {
  email: 'admin@admin.ru',
  password: 'admin',
};

const SignIn: React.FC = () => {
  const [ip, setIp] = useState<string | null>(null);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    (async () => {
      const newIp = await storage.ip.get() || config.authUrl;
      setIp(newIp);
    })();
  }, []);

  const handleSubmit = async (values: ISignIn) => {
    dispatch(signInThunk(values));
  };

  const handleChangeIp = (text: string) => {
    setIp(text);
    storage.ip.set(text);
    addBaseURL(text);
  };

  return (
    <>
      <LockSvg width={220} height={220} style={styles.image} />

      <View style={styles.formContainer}>
        <CustomTextInput
          itemLabel="IP"
          value={ip || ''}
          editable={!!ip}
          onChangeText={handleChangeIp}
        />
        <SignInForm initialValues={initialValues} onSubmit={handleSubmit} />
        <CustomText style={styles.signUpText}>
          {'No account? '}
          <Link style={styles.signUpLink} to={{ screen: 'SignUp' }}>SIGN UP</Link>
        </CustomText>
      </View>
    </>
  );
};

export default SignIn;
