import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { setPokemons } from '../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../store/store';
import { theme } from '../theme';

const handleCheckToken = async () => {
  const token = await AsyncStorage.getItem('token');
  Alert.alert(
    'token',
    String(token),
  );
};

const Settings = () => {
  const dispatch = useTypedDispatch();
  return (
    <View style={styles.сontainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCheckToken}>
        <Text style={styles.buttonText}>CHECK TOKEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
          style={styles.button}
          onPress={() => { dispatch(setPokemons([])); }}>
          <Text style={styles.buttonText}>CLEAR POKEMON ARRAY</Text>
      </TouchableOpacity>
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
  button: {
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  buttonText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default Settings;
