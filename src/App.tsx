import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { store } from './store/store';

import Main from './screens/Main';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import PasswordRecovery from './screens/PasswordRecovery';
import PokemonData from './screens/PokemonData';
import PokemonTabs from './screens/PokemonTabs';
import MediaFiles from './screens/MediaFiles';
import CameraVision from './screens/Camera/CameraVision';
import UserTabs from './screens/UserTabs';
import Settings from './screens/Settings';
import CurrentUserTabs from './screens/CurrentUserTabs';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
  PokemonTabs: undefined;
  PokemonData: { id: number, title: string };
  Main: undefined;
  MediaFiles: undefined;
  CameraVision: undefined;
  UserTabs: undefined;
  Settings: undefined;
  CurrentUserTabs: undefined;
};

type ScreenKeys = keyof RootStackParamList;
export type RouteCommon<T extends ScreenKeys> = RouteProp<RootStackParamList, T>;
export type NavigationCommon<T extends ScreenKeys> = NativeStackNavigationProp<
  RootStackParamList,
  T
>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ title: 'Main', headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Sign In' }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name="PasswordRecovery"
            component={PasswordRecovery}
            options={{ title: 'Password Recovery' }}
          />
          <Stack.Screen
            name="UserTabs"
            component={UserTabs}
            options={{ title: 'Users' }}
          />
          <Stack.Screen
            name="PokemonTabs"
            component={PokemonTabs}
            options={{ title: 'Pokemon', headerShown: false }}
          />
          <Stack.Screen
            name="PokemonData"
            component={PokemonData}
            options={({ route }) => ({
              title: route.params?.title,
            })}
          />
          <Stack.Screen
            name="CameraVision"
            component={CameraVision}
            options={{ headerShown: false, title: 'Camera Vision' }}
          />
          <Stack.Screen
            name="MediaFiles"
            component={MediaFiles}
            options={{ title: 'MediaFiles' }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ title: 'Settings' }}
          />
          <Stack.Screen
            name="CurrentUserTabs"
            component={CurrentUserTabs}
            options={{ title: 'Current User' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
