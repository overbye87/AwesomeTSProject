import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PokemonList from '../components/PokemonList';
import Filter from '../components/Filter';
import {theme} from '../theme';
import CameraVision from '../components/CameraVision';

const Tab = createBottomTabNavigator();

const PokemonTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'List') {
            iconName = focused ? 'ios-list-circle' : 'ios-list-circle-outline';
          } else if (route.name === 'Filter') {
            iconName = focused ? 'ios-filter' : 'ios-filter-outline';
          } else if (route.name === 'Camera') {
            iconName = focused ? 'ios-camera' : 'ios-camera-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.color.headerDark,
        tabBarInactiveTintColor: theme.color.mainText,
      })}>
      <Tab.Screen name="List" component={PokemonList} />
      <Tab.Screen name="Filter" component={Filter} />
      <Tab.Screen name="Camera" component={CameraVision} />
    </Tab.Navigator>
  );
};

export default PokemonTabs;
