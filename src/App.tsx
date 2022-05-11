import React from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';
import PasswordRecovery from './pages/PasswordRecovery';
import PokemonData from './pages/PokemonData';
import PokemonTabs from './pages/PokemonTabs';
import { store } from './store/store';
import Main from './pages/Main';
import MediaFiles from './pages/MediaFiles';

type RootStackParamList = {
  SignIn: undefined;
  PasswordRecovery: undefined;
  PokemonTabs: undefined;
  PokemonData: undefined;
  Main: undefined;
  MediaFiles: undefined;
};

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
              title: route.params.title,
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
