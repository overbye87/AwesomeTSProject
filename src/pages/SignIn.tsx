import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { signInThunk } from '../store/userThunks';
import { theme } from '../theme';

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

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const { navigate } = useNavigation();

  const handleSubmit = async () => {
    dispatch(signInThunk({ username, password }));
    navigate('Main');
    // Alert.alert(
    //   'OK',
    //   JSON.stringify(data, null, 2),
    // );
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
          placeholder="USERNAME"
          value={username}
          onChangeText={setUsername}
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

export default SignIn;
