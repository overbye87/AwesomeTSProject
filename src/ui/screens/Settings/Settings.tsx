import React from 'react';
import {
  Alert,
  View,
} from 'react-native';
import { setPokemons } from '../../../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../../../store/store';
import { getToken } from '../../../utils/token';
import MenuButton from '../../components/Button';
import { styles } from './Settings.styles';

const handleCheckToken = async () => {
  const token = await getToken();
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

export default Settings;
