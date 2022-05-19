import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationCommon, RootStackParamList } from '../App';
import { useTypedDispatch, useTypedSelector } from '../store/store';
import { setUser } from '../store/user/userSlice';
import { theme } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const Main: React.FC<Props> = () => {
  const { navigate } = useNavigation<NavigationCommon<'Main'>>();
  const dispatch = useTypedDispatch();
  const currentUser = useTypedSelector(({ user }) => user.currentUser);

  const handleLogOut = async () => {
    AsyncStorage.removeItem('token');
    dispatch(setUser(null));
  };

  return (
    <>
      <View style={styles.сontainer}>
        <View style={styles.logo}>
          {/* <Text style={styles.text}>User:</Text> */}
          {currentUser
            ? <Text style={styles.headerText}>{currentUser.email}</Text>
            : <Text style={styles.text}>Please sign in</Text>
          }
        </View>
      </View>
      <View style={styles.сontainer}>
        {
          !currentUser
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
        {
          currentUser
          && <TouchableOpacity
               style={styles.button}
               onPress={() => navigate('UserTabs')}>
               <Text style={styles.buttonText}>USER LIST</Text>
            </TouchableOpacity>
        }
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
      <TouchableOpacity
          style={styles.settings}
          onPress={() => navigate('Settings')}>
          <Ionicons name={'settings-outline'} size={40}/>
      </TouchableOpacity>
      {
        currentUser
        && <TouchableOpacity
             style={styles.user}
             onPress={() => navigate('CurrentUser')}>
             <Ionicons name={'person-circle-outline'} size={40}/>
          </TouchableOpacity>
      }

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
  settings: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  user: {
    position: 'absolute',
    top: 15,
    left: 15,
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
    fontSize: 20,
    color: theme.color.headerBackground,
  },
  text: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.mainText,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

export default Main;
