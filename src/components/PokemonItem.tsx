import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { IPokemonFullData } from '../types/pokemonsTypes';
import { NavigationCommon } from '../App';

type Props = {
  pokemon: IPokemonFullData;
};

const PokemonItem: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationCommon<'PokemonTabs'>>();

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

const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  pokemonImage: {
    width: 96,
    height: 96,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  name: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  description: {
    textTransform: 'capitalize',
  },
  dataButton: {
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  dataText: {
    textAlign: 'center',
  },
});

export default PokemonItem;
