import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../theme';
import UserList from '../components/user/UserList';
import UserFilter from '../components/user/UserFilter';
import CurrentUserInfo from '../components/user/CurrentUserInfo';
import CurrentUserDataChange from '../components/user/CurrentUserDataChange';
import CurrentUserPasswordChange from '../components/user/CurrentUserPasswordChange';

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
      <Tab.Screen name="Info" component={CurrentUserInfo} />
      <Tab.Screen name="DataChange" component={CurrentUserDataChange} />
      <Tab.Screen name="PasswordChange" component={CurrentUserPasswordChange} />
    </Tab.Navigator>
  );
};

export default CurrentUserTabs;
