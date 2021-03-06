import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTypedSelector } from '../../store/store';

import CommonNavigator, { CommonStackParamList } from './CommonNavigator';
import ProtectedNavigator, { ProtectedStackParamList } from './ProtectedNavigator';

export type AppStackParamList = {
  CommonNavigator: { screen: keyof CommonStackParamList; },
  ProtectedNavigator: { screen: keyof ProtectedStackParamList; },
};

type ScreenKeys = keyof AppStackParamList;
export type RouteAppStack<T extends ScreenKeys> = RouteProp<AppStackParamList, T>;
export type NavigationAppStack<T extends ScreenKeys> = NativeStackNavigationProp<
  AppStackParamList,
  T
>;
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator: React.FC = () => {
  const currentUser = useTypedSelector(({ user }) => user.currentUser);
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {
          !currentUser
            ? (
              <AppStack.Screen
                name="CommonNavigator"
                component={CommonNavigator}
                options={{ headerShown: false }}
              />
            )
            : (
              <AppStack.Screen
                name="ProtectedNavigator"
                component={ProtectedNavigator}
                options={{ headerShown: false }}
              />
            )
        }
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
