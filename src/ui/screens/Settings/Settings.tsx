import React from 'react';
import {
  Alert,
  View,
} from 'react-native';
import { setPokemons } from '../../../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../../../store/store';
import storage from '../../../utils/storage';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { styles } from './Settings.styles';

const handleCheckToken = async () => {
  const token = await storage.token.get();
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
