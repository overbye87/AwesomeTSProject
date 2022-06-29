import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import CurrentUserTabs from '../screens/CurrentUser/CurrentUserTabs';
import Settings from '../screens/Settings/Settings';
import PasswordRecovery from '../screens/PasswordRecovery/PasswordRecovery';
import AppTabBar from '../screens/AppTabBar/AppTabBar';
import PokemonData from '../screens/Pokemon/components/PokemonData';
import CameraVision from '../screens/CameraVision/CameraVision';
import MediaFiles from '../screens/MediaFiles/MediaFiles';
import PokemonTabs from '../screens/Pokemon/PokemonTabs';
import Main from '../screens/Main/Main';

export type ProtectedStackParamList = {
  CurrentUserTabs: undefined;
  Settings: undefined;
  Main: undefined;
  PasswordRecovery: undefined;
  PokemonTabs: undefined;
  PokemonData: { id: number, title: string };
  MediaFiles: undefined;
  CameraVision: undefined;
  UserTabs: undefined;
}

type ScreenKeys = keyof ProtectedStackParamList;
export type RouteProtectedStack<T extends ScreenKeys> = RouteProp<ProtectedStackParamList, T>;
export type NavigationProtectedStack<T extends ScreenKeys> = NativeStackNavigationProp<
  ProtectedStackParamList,
  T
>;
const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

const ProtectedNavigator: React.FC = () => {
  return (
    <ProtectedStack.Navigator>
      <ProtectedStack.Screen
        name="UserTabs"
        component={AppTabBar}
        options={{ title: 'AppTabBar', headerShown: false }}
      />
      <ProtectedStack.Screen
        name="CurrentUserTabs"
        component={CurrentUserTabs}
        options={{ title: 'Current User' }}
      />
      <ProtectedStack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Main', headerShown: false }}
      />
      <ProtectedStack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
      <ProtectedStack.Screen
        name="PasswordRecovery"
        component={PasswordRecovery}
        options={{ title: 'Password Recovery' }}
      />
      <ProtectedStack.Screen
        name="PokemonTabs"
        component={PokemonTabs}
        options={{ title: 'Pokemon', headerShown: false }}
      />
      <ProtectedStack.Screen
        name="PokemonData"
        component={PokemonData}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
      <ProtectedStack.Screen
        name="CameraVision"
        component={CameraVision}
        options={{ headerShown: false, title: 'Camera Vision' }}
      />
      <ProtectedStack.Screen
        name="MediaFiles"
        component={MediaFiles}
        options={{ title: 'MediaFiles' }}
      />
    </ProtectedStack.Navigator>
  );
};



export default ProtectedNavigator;
