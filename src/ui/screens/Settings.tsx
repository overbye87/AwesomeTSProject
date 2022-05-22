import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import { setPokemons } from '../../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../../store/store';
import { theme } from '../../theme';
import MenuButton from '../components/MenuButton';

const handleCheckToken = async () => {
  const token = await AsyncStorage.getItem('token');
  Alert.alert(
    'token',
    String(token),
  );
};

const Settings: React.FC = () => {
  const dispatch = useTypedDispatch();
  return (
    <View style={styles.сontainer}>
      <MenuButton buttonLabel="CHECK TOKEN" onPress={handleCheckToken} />
      <MenuButton buttonLabel="CLEAR POKEMON ARRAY" onPress={() => { dispatch(setPokemons([])); }} />
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
});

export default Settings;
