import React from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { setUser } from '../../../store/user/userSlice';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import { styles } from './Main.styles';
import { theme } from '../../styles/theme';
import { removeToken } from '../../../utils/token';
import { NavigationAppStack } from '../../navigation/AppNavigator';
import { CommonStackParamList } from '../../navigation/CommonNavigator';
import { IUser } from '../../../types/userTypes';
import RocketSvg from './assets/rocket-spaceship-start-svgrepo-com.svg';
import CustomText from '../../components/CustomText';

type Props = NativeStackScreenProps<CommonStackParamList, 'Main'>;

const Main: React.FC<Props> = () => {
  const { navigate } = useNavigation<NavigationAppStack<'CommonNavigator'>>();
  const dispatch = useTypedDispatch();
  const currentUser = useTypedSelector(({ user }) => user.currentUser);

  const handleLogOut = async () => {
    await removeToken;
    dispatch(setUser(null));
  };

  const getUserName = (user: IUser): string => {
    if (!user.firstName && !user.lastName) return user.email;
    return (user.firstName && user.firstName.concat(' ')) + user.lastName;
  };

  return (
    <>
      <View style={styles.сontainer}>
        <Logo>
          {currentUser
            ? <CustomText style={styles.headerText}>{getUserName(currentUser)}</CustomText>
            : <>
                <RocketSvg width={220} height={220} />
                {/* <CustomText style={styles.text}>Please sign in</CustomText> */}
              </>
          }
        </Logo>
      </View>
      <View style={styles.сontainer}>
        {
          !currentUser
            ? <>
              <CustomButton onPress={() => navigate('CommonNavigator', { screen: 'SignIn' })}>
                SIGN IN
              </CustomButton>
              <CustomButton onPress={() => navigate('CommonNavigator', { screen: 'SignUp' })}>
                <CustomText>SIGN UP</CustomText>
              </CustomButton>
            </>
            : <>
              <CustomButton onPress={handleLogOut}>
                <CustomText>LOG OUT</CustomText>
              </CustomButton>
              <CustomButton onPress={() => navigate('CommonNavigator', { screen: 'UserTabs' })}>
                <CustomText>USER LIST</CustomText>
              </CustomButton>
            </>
        }
        <CustomButton onPress={() => navigate('CommonNavigator', { screen: 'PokemonTabs' })}>
          <CustomText>POKEMON LIST</CustomText>
        </CustomButton>
        <CustomButton onPress={() => navigate('CommonNavigator', { screen: 'CameraVision' })}>
          <CustomText>CAMERA VISION</CustomText>
        </CustomButton>
      </View>
      <Ionicons
        name="settings-outline"
        style={{ position: 'absolute', top: 15, right: 15 }}
        color={theme.color.gray}
        size={40}
        onPress={() => navigate('ProtectedNavigator', { screen: 'Settings' })}
      />
      {
        currentUser &&
        <Ionicons
          name="person-circle-outline"
          style={{ position: 'absolute', top: 15, left: 15 }}
          color={theme.color.gray}
          size={40}
          onPress={() => navigate('ProtectedNavigator', { screen: 'CurrentUserTabs' })}
        />
      }

    </>
  );
};

export default Main;
