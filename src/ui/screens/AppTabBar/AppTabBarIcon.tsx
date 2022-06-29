import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  routeName: string;
  focused: boolean;
  color: string;
  size: number;
};

const AppTabBarIcon: React.FC<Props> = (props) => {
  let iconName = 'ios-sad-outline';

  switch (props.routeName) {
    case 'Users': {
      iconName = props.focused ? 'ios-list-circle' : 'ios-list-circle-outline';
      break;
    }
    case 'Filter': {
      iconName = props.focused ? 'ios-filter' : 'ios-filter-outline';
      break;
    }
    case 'Settings': {
      iconName = props.focused ? 'ios-settings' : 'ios-settings-outline';
      break;
    }
    case 'User': {
      iconName = props.focused ? 'ios-person-circle' : 'ios-person-circle-outline';
      break;
    }
    case 'Pokemons': {
      iconName = 'logo-octocat';
      break;
    }
  }
  return <Ionicons name={iconName} size={props.size} color={props.color} />;
};

export default AppTabBarIcon;
