import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTypedDispatch } from '../store/store';
import { theme } from '../theme';
import { NavigationCommon, RootStackParamList } from '../App';
import validation from '../utils/validation';
import { ISignUp } from '../types/userApi';
import { signUpThunk } from '../store/userThunks';

const initialValues: ISignUp = {
  email: 'admin@admin.ru',
  password: 'admin',
  firstName: 'Jacob',
  lastName: 'Astrowsky',
  login: 'Kukuruzo',
};

const validationSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
  firstName: validation.firstName,
  lastName: validation.lastName,
  login: validation.login,
});

const SignUp: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationCommon<'SignUp'>>();

  const SubmitSignUpForm = async (values: ISignUp) => {
    dispatch(signUpThunk(values));
    navigate('Main');
  };

  return (
    <>
      <View style={styles.сontainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={SubmitSignUpForm}
        >
      {({
        handleChange, handleBlur, handleSubmit, values, errors, touched,
      }) => (
       <>
        <Text style={errors.email && touched.email ? styles.labelerror : styles.label}>
          {errors.email && touched.email ? `EMAIL: ${errors.email}` : 'EMAIL:' }
        </Text>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Text style={errors.password && touched.password ? styles.labelerror : styles.label}>
          {errors.password && touched.password ? `PASSWORD: ${errors.password}` : 'PASSWORD:' }
        </Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="PASSWORD"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <Text style={errors.firstName && touched.firstName ? styles.labelerror : styles.label}>
          {errors.firstName && touched.firstName ? `NAME: ${errors.firstName}` : 'NAME:' }
        </Text>
        <TextInput
          style={styles.input}
          placeholder="NAME"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
        />
        <Text style={errors.lastName && touched.lastName ? styles.labelerror : styles.label}>
          {errors.lastName && touched.lastName ? `SURNAME: ${errors.lastName}` : 'SURNAME:' }
        </Text>
        <TextInput
          style={styles.input}
          placeholder="SURNAME"
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
        />
        <Text style={errors.login && touched.login ? styles.labelerror : styles.label}>
          {errors.login && touched.login ? `LOGIN: ${errors.login}` : 'LOGIN:' }
        </Text>
        <TextInput
          style={styles.input}
          placeholder="LOGIN"
          onChangeText={handleChange('login')}
          onBlur={handleBlur('login')}
          value={values.login}
        />

        <TouchableOpacity
          style={styles.signButton}
          onPress={handleSubmit}>
          <Text style={styles.signText}>SIGN UP</Text>
        </TouchableOpacity>
       </>
      )}
     </Formik>

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
  label: {
    width: 330,
    color: theme.color.gray,
    fontSize: 15,
    textAlign: 'left',
  },
  labelerror: {
    width: 330,
    color: theme.color.red,
    fontSize: 15,
    textAlign: 'left',
  },
  input: {
    fontSize: 20,
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 10,
    padding: 0,
  },
  signButton: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  signText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default SignUp;
