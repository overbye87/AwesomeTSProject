import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import UserFilter from './components/UserFilter';
import UserList from './components/UserList';
import { theme } from '../../styles/theme';

const Tab = createBottomTabNavigator();

const PokemonTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'List':
              iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
              break;
            case 'Filter':
              iconName = focused ? 'ios-filter' : 'ios-filter-outline';
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.color.headerDark,
        tabBarInactiveTintColor: theme.color.mainText,
      })}>
      <Tab.Screen name="List" component={UserList} />
      <Tab.Screen name="Filter" component={UserFilter} />
    </Tab.Navigator>
  );
};

export default PokemonTabs;
