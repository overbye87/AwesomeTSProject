import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import Main from '../screens/Main/Main';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import PasswordRecovery from '../screens/PasswordRecovery/PasswordRecovery';
import UserTabs from '../screens/User/UserTabs';
import PokemonData from '../screens/Pokemon/components/PokemonData';
import CameraVision from '../screens/CameraVision/CameraVision';
import MediaFiles from '../screens/MediaFiles/MediaFiles';
import PokemonTabs from '../screens/Pokemon/PokemonTabs';

export type CommonStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
  PokemonTabs: undefined;
  PokemonData: { id: number, title: string };
  Main: undefined;
  MediaFiles: undefined;
  CameraVision: undefined;
  UserTabs: undefined;
}

type ScreenKeys = keyof CommonStackParamList;
export type RouteCommonStack<T extends ScreenKeys> = RouteProp<CommonStackParamList, T>;
export type NavigationCommonStack<T extends ScreenKeys> = NativeStackNavigationProp<
CommonStackParamList,
  T
>;

const CommonStack = createNativeStackNavigator<CommonStackParamList>();

const CommonNavigator: React.FC = () => {
  return (
    <CommonStack.Navigator>
      <CommonStack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Main', headerShown: false }}
      />
      <CommonStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <CommonStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up' }}
      />
      <CommonStack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{ title: 'Password Recovery' }}
      />
      <CommonStack.Screen
        name="UserTabs"
        component={UserTabs}
        options={{ title: 'Users' }}
      />
      <CommonStack.Screen
        name="PokemonTabs"
        component={PokemonTabs}
        options={{ title: 'Pokemon', headerShown: false }}
      />
      <CommonStack.Screen
        name="PokemonData"
        component={PokemonData}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
      <CommonStack.Screen
        name="CameraVision"
        component={CameraVision}
        options={{ headerShown: false, title: 'Camera Vision' }}
      />
      <CommonStack.Screen
        name="MediaFiles"
        component={MediaFiles}
        options={{ title: 'MediaFiles' }}
      />
    </CommonStack.Navigator>
  );
};



export default CommonNavigator;
