import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IPokemonFullData } from '../../../../types/pokemonsTypes';
import { styles } from './PokemonItem.styles';
import CustomText from '../../../components/CustomText';
import { NavigationProtectedStack } from '../../../navigation/ProtectedNavigator';

type Props = {
  pokemon: IPokemonFullData;
};

const PokemonItem: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationProtectedStack<'PokemonTabs'>>();

  if (!props.pokemon) {
    return null;
  }

  const title = props.pokemon.name.toUpperCase();
  const { id } = props.pokemon;

  return (
    <View style={styles.сontainer}>
      <Image
        source={{
          uri: props.pokemon.sprites.other['official-artwork'].front_default,
        }}
        style={styles.pokemonImage}
      />
      <View style={styles.textContainer}>
        <CustomText style={styles.id}>ID: {props.pokemon.id}</CustomText>
        <CustomText style={styles.name}>{props.pokemon.name}</CustomText>
        <CustomText style={styles.description}>height: {props.pokemon.height}</CustomText>
        <CustomText style={styles.description}>weight: {props.pokemon.weight}</CustomText>
        <TouchableOpacity
          style={styles.dataButton}
          onPress={() => navigate('PokemonData', { id, title })}>
          <CustomText style={styles.dataText}>SHOW DATA</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PokemonItem;
