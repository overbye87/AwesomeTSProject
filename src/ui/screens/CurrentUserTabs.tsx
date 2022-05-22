import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../../theme';

import Information from '../components/user/Information';
import PasswordChange from '../components/user/PasswordChange';
import DataChange from '../components/user/DataChange';

const Tab = createBottomTabNavigator();

const CurrentUserTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'Info':
              iconName = focused ? 'information-circle' : 'information-circle-outline';
              break;
            case 'DataChange':
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case 'PasswordChange':
              iconName = focused ? 'md-key' : 'md-key-outline';
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.color.headerDark,
        tabBarInactiveTintColor: theme.color.mainText,
      })}>
      <Tab.Screen name="Info" component={Information} />
      <Tab.Screen name="DataChange" component={DataChange} />
      <Tab.Screen name="PasswordChange" component={PasswordChange} />
    </Tab.Navigator>
  );
};

export default CurrentUserTabs;
