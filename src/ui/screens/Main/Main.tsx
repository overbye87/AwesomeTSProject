import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationCommon, RootStackParamList } from '../../../App';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { setUser } from '../../../store/user/userSlice';
import Logo from '../../components/Logo';
import MenuButton from '../../components/Button';
import { styles } from './Main.styles';
import { theme } from '../../styles/theme';
import { removeToken } from '../../../utils/token';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const Main: React.FC<Props> = () => {
  const { navigate } = useNavigation<NavigationCommon<'Main'>>();
  const dispatch = useTypedDispatch();
  const currentUser = useTypedSelector(({ user }) => user.currentUser);

  const handleLogOut = async () => {
    await removeToken;
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
      <Ionicons
        name="settings-outline"
        style={{ position: 'absolute', top: 15, right: 15 }}
        color={theme.color.gray}
        size={40}
        onPress={() => navigate('Settings')}
      />
      {
        currentUser
        && <Ionicons
             name="person-circle-outline"
             style={{ position: 'absolute', top: 15, left: 15 }}
             color={theme.color.gray}
             size={40}
             onPress={() => navigate('CurrentUserTabs')}
           />
      }

    </>
  );
};

export default Main;
