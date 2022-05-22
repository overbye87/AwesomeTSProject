import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { NavigationCommon, RootStackParamList } from '../../App';
import { useTypedDispatch, useTypedSelector } from '../../store/store';
import { setUser } from '../../store/user/userSlice';
import { theme } from '../../theme';
import Logo from '../components/Logo';
import MenuButton from '../components/MenuButton';
import SettingsButton from '../components/SettingsButton';
import UserButton from '../components/UserButton';

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
        <Logo>
          {currentUser
            ? <Text style={styles.headerText}>{currentUser.email}</Text>
            : <Text style={styles.text}>Please sign in</Text>
          }
        </Logo>
      </View>
      <View style={styles.сontainer}>
        {
          !currentUser
            ? <>
                <MenuButton buttonLabel="SIGN IN" onPress={() => navigate('SignIn')} />
                <MenuButton buttonLabel="SIGN UP" onPress={() => navigate('SignUp')} />
              </>
            : <>
                <MenuButton buttonLabel="LOG OUT" onPress={handleLogOut} />
                <MenuButton buttonLabel="USER LIST" onPress={() => navigate('UserTabs')} />
              </>
        }
        <MenuButton buttonLabel="POKEMON LIST" onPress={() => navigate('PokemonTabs')} />
        <MenuButton buttonLabel="CAMERA VISION" onPress={() => navigate('CameraVision')} />
      </View>
      <SettingsButton onPress={() => navigate('Settings')}/>
      {
        currentUser
        && <UserButton onPress={() => navigate('CurrentUserTabs')}/>
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
});

export default Main;
