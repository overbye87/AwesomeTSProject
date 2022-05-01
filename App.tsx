import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './src/pages/SignIn';
import PasswordRecovery from './src/pages/PasswordRecovery';
import Pokemons from './src/pages/Pokemons';
import PokemonData from './src/pages/PokemonData';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{title: 'Sign In'}}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecovery}
          options={{title: 'Password Recovery'}}
        />
        <Stack.Screen
          name="Pokemons"
          component={Pokemons}
          options={{title: 'Pokemons'}}
        />
        <Stack.Screen
          name="PokemonData"
          component={PokemonData}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
