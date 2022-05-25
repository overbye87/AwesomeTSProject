import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import CurrentUserTabs from '../ui/screens/CurrentUser/CurrentUserTabs';
import Settings from '../ui/screens/Settings/Settings';

export type AuthStackParamList = {
  CurrentUserTabs: undefined;
  Settings: undefined;
}

type ScreenKeys = keyof AuthStackParamList;
export type RouteAuthStack<T extends ScreenKeys> = RouteProp<AuthStackParamList, T>;
export type NavigationAuthStack<T extends ScreenKeys> = NativeStackNavigationProp<
AuthStackParamList,
  T
>;
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="CurrentUserTabs"
        component={CurrentUserTabs}
        options={{ title: 'Current User' }}
      />
      <AuthStack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </AuthStack.Navigator>
  );
};



export default AuthNavigator;
