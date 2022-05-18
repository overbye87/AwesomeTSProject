import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Alert,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { NavigationCommon, RootStackParamList } from '../App';
import { setPokemons } from '../store/pokemonsSlice';
import { useTypedSelector } from '../store/store';
import { setUser } from '../store/userSlice';
import { theme } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const Main: React.FC<Props> = () => {
  const { navigate } = useNavigation<NavigationCommon<'Main'>>();
  const dispatch = useDispatch();
  const currentUser = useTypedSelector(({ user }) => user.user);

  const handleLogOut = async () => {
    AsyncStorage.removeItem('token');
    dispatch(setUser(null));
  };

  const handleCheckToken = async () => {
    const token = await AsyncStorage.getItem('token');
    Alert.alert(
      'token',
      String(token),
    );
  };

  return (
    <>
      <View style={styles.сontainer}>
        <Text style={styles.text}>User:</Text>
        {currentUser
          ? <Text style={styles.headerText}>{currentUser.email}</Text>
          : <Text style={styles.text}>Please login</Text>
        }
      </View>
      <View style={styles.сontainer}>
        {!currentUser
          ? <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('SignIn')}>
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('SignUp')}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </>
          : <TouchableOpacity
          style={styles.button}
          onPress={handleLogOut}>
          <Text style={styles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
        }
        <TouchableOpacity
          style={styles.button}
          onPress={handleCheckToken}>
          <Text style={styles.buttonText}>CHECK TOKEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { dispatch(setPokemons([])); }}>
          <Text style={styles.buttonText}>CLEAR POKEMON ARRAY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('PokemonTabs')}>
          <Text style={styles.buttonText}>POKEMON LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('CameraVision')}>
          <Text style={styles.buttonText}>CAMERA VISION</Text>
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
  button: {
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
  headerText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 40,
    color: theme.color.headerBackground,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 40,
    color: theme.color.mainText,
  },
});

export default Main;
