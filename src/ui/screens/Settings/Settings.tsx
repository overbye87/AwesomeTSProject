import React from 'react';
import {
  Alert,
  Text,
  View,
} from 'react-native';
import { setPokemons } from '../../../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../../../store/store';
import { getToken } from '../../../utils/token';
import Button from '../../components/Button';
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
      <Button onPress={handleCheckToken} >
        <Text>CHECK TOKEN</Text>
      </Button>
      <Button onPress={() => { dispatch(setPokemons([])); }} >
        <Text>CLEAR POKEMON ARRAY</Text>
      </Button>
    </View>
  );
};

export default Settings;
