import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import SignIn from './screens/SignIn';
import PasswordRecovery from './screens/PasswordRecovery';
import PokemonData from './screens/PokemonData';
import PokemonTabs from './screens/PokemonTabs';
import { store } from './store/store';
import Main from './screens/Main';
import MediaFiles from './screens/MediaFiles';
import SignUp from './screens/SignUp';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
  PokemonTabs: undefined;
  PokemonData: { id: number, title: string };
  Main: undefined;
  MediaFiles: undefined;
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
            name="PokemonTabs"
            component={PokemonTabs}
            options={{ title: 'PokemonTabs', headerShown: false }}
          />
          <Stack.Screen
            name="PokemonData"
            component={PokemonData}
            options={({ route }) => ({
              title: route.params?.title,
            })}
          />
          <Stack.Screen
            name="MediaFiles"
            component={MediaFiles}
            options={{ title: 'MediaFiles' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
