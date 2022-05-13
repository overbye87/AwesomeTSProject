import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTypedDispatch } from '../store/store';
import { signInThunk } from '../store/userThunks';
import { theme } from '../theme';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackScreenProps<RootStackParamList>['navigation'];

const SignIn: React.FC = () => {
  const dispatch = useTypedDispatch();
  const [email, setEmail] = useState<string>('admin@admin.ru');
  const [password, setPassword] = useState<string>('admin');

  const { navigate } = useNavigation<NavigationProp>();

  const handleSubmit = async () => {
    const signInData = { email, password };
    dispatch(signInThunk(signInData));
    navigate('Main');
  };

  return (
    <>
      <View style={styles.сontainer}>
        <View style={styles.logo}>
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
            }}
            style={styles.logoImage}
          />
          {/* <Text style={styles.logoText}>LOGO APP</Text> */}
        </View>
      </View>
      <View style={styles.сontainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          value={password}
          onChangeText={setPassword}
        />
        <View>
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigate('PasswordRecovery')}>
            <Text style={styles.forgotText}>FORGOT PASSWORD?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signButton}
          onPress={handleSubmit}>
          <Text style={styles.signText}>SIGN IN</Text>
        </TouchableOpacity>
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
  logoImage: {
    width: 257,
    height: 103,
  },
  logoText: {
    color: theme.color.mainText,
    fontSize: 30,
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 20,
  },
  forgotButton: {},
  forgotText: {
    width: 300,
    textAlign: 'right',
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

export default SignIn;
