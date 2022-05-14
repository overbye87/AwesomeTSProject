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
import { RootStackParamList } from '../App';
import validation from '../utils/validation';

interface ISignUpFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  login: string;
}

const initialValues: ISignUpFormValues = {
  email: 'asd@asd.ru',
  password: 'asd',
  firstName: 'Asdasd',
  lastName: 'Dsadsa',
  login: 'asd',
};

const validationSchema = yup.object().shape({
  email: validation.email,
  password: validation.password,
  firstName: validation.firstName,
  lastName: validation.lastName,
  login: validation.login,
});

type NavigationProp = NativeStackScreenProps<RootStackParamList>['navigation'];

const SignUp: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { navigate } = useNavigation<NavigationProp>();

  const SubmitSignUpForm = async (values: ISignUpFormValues) => {
    Alert.alert('values', JSON.stringify(values, null, 2));
  };

  return (
    <>
      <View style={styles.сontainer}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>SIGN UP</Text>
        </View>
      </View>
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
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {errors.email && touched.email && (
          <Text style={styles.signText}>{errors.email}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
        />
        <TextInput
          style={styles.input}
          placeholder="NAME"
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="SURNAME"
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
        />
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
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoText: {
    color: theme.color.mainText,
    fontSize: 30,
  },
  input: {
    fontSize: 20,
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 10,
    padding: 0,
  },
  error: {
    color: 'red',
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
