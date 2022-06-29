/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserList from './components/UserList';
import { theme } from '../../styles/theme';
import UserTabBarIcon from './AppTabBarIcon';
import Settings from '../Settings/Settings';
import CurrentUserTabs from '../CurrentUser/CurrentUserTabs';
import PokemonList from '../Pokemon/components/PokemonList';

const Tab = createBottomTabNavigator();

const AppTabBar: React.FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <UserTabBarIcon
              routeName={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          ),
          tabBarActiveTintColor: theme.color.headerDark,
          tabBarInactiveTintColor: theme.color.mainText,
        })}>
        <Tab.Screen name="User" component={CurrentUserTabs} />
        <Tab.Screen name="Users" component={UserList} />
        <Tab.Screen name="Pokemons" component={PokemonList} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

export default AppTabBar;
