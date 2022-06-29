import React from 'react';
import {
  Alert,
  View,
} from 'react-native';
import { setPokemons } from '../../../store/pokemons/pokemonsSlice';
import { useTypedDispatch } from '../../../store/store';
import { setUser } from '../../../store/user/userSlice';
import storage from '../../../utils/storage';
import { removeToken } from '../../../utils/token';
import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';
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

  const handleLogOut = async () => {
    await removeToken;
    dispatch(setUser(null));
  };

  return (
    <View style={styles.сontainer}>
      <CustomButton onPress={handleLogOut}>
        <CustomText>LOG OUT</CustomText>
      </CustomButton>
      <CustomButton onPress={handleCheckToken} >
        <CustomText>CHECK TOKEN</CustomText>
      </CustomButton>
      <CustomButton onPress={() => { dispatch(setPokemons([])); }} >
        <CustomText>CLEAR POKEMON ARRAY</CustomText>
      </CustomButton>
    </View>
  );
};

export default Settings;
