import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';


export type CommonStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
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
        name="SignIn"
        component={SignIn}
        options={{ title: 'Sign In', headerShown: false }}
      />
      <CommonStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: 'Sign Up', headerShown: false }}
      />
    </CommonStack.Navigator>
  );
};



export default CommonNavigator;
