import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IPokemonFullData } from '../../../../types/pokemonsTypes';
import { styles } from './PokemonItem.styles';
import { NavigationCommonStack } from '../../../../navigation/CommonNavigator';

type Props = {
  pokemon: IPokemonFullData;
};

const PokemonItem: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationCommonStack<'PokemonTabs'>>();

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
        <Text style={styles.id}>ID: {props.pokemon.id}</Text>
        <Text style={styles.name}>{props.pokemon.name}</Text>
        <Text style={styles.description}>height: {props.pokemon.height}</Text>
        <Text style={styles.description}>weight: {props.pokemon.weight}</Text>
        <TouchableOpacity
          style={styles.dataButton}
          onPress={() => navigate('PokemonData', { id, title })}>
          <Text style={styles.dataText}>SHOW DATA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PokemonItem;
