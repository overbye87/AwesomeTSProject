import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';

import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import { store } from './store/store';
import Loading from './components/Loading';

// import Main from './screens/Main';
// import SignIn from './screens/SignIn';
// import SignUp from './screens/SignUp';
// import PasswordRecovery from './screens/PasswordRecovery';
// import PokemonData from './screens/PokemonData';
// import PokemonTabs from './screens/PokemonTabs';
// import MediaFiles from './screens/MediaFiles';

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

const Main = lazy(() => import('./screens/Main'));
const SignIn = lazy(() => import('./screens/SignIn'));
const SignUp = lazy(() => import('./screens/SignUp'));
const PasswordRecovery = lazy(() => import('./screens/PasswordRecovery'));
const PokemonData = lazy(() => import('./screens/PokemonData'));
const PokemonTabs = lazy(() => import('./screens/PokemonTabs'));
const MediaFiles = lazy(() => import('./screens/MediaFiles'));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
