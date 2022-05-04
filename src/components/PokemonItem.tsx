import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { theme } from '../theme';
import { IPokemon, IPokemonData } from '../types';

type Props = {
  pokemon: IPokemon;
};

const PokemonItem: React.FC<Props> = props => {
  const [pokemonData, setPokemonData] = useState<null | IPokemonData>(null);
  const { navigate } = useNavigation();

  const fetchPokemonData = async (pokemonUrl: string) => {
    try {
      const res = await axios.get(pokemonUrl);
      setPokemonData(res.data);
    } catch (error) {
      Alert.alert(
        'Can not get pokemon data',
        JSON.stringify((error as Error).message),
      );
    }
  };

  useEffect(() => {
    fetchPokemonData(props.pokemon.url);
  }, [props.pokemon.url]);

  const title = pokemonData?.name.toUpperCase();

  if (!pokemonData) {
    return null;
  }

  return (
    <View style={styles.сontainer}>
      <Image
        source={{
          uri: pokemonData.sprites.other['official-artwork'].front_default,
        }}
        style={styles.pokemonImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.id}>ID: {pokemonData.id}</Text>
        <Text style={styles.name}>{pokemonData.name}</Text>
        <Text style={styles.description}>height: {pokemonData.height}</Text>
        <Text style={styles.description}>weight: {pokemonData.weight}</Text>
        <TouchableOpacity
          style={styles.dataButton}
          onPress={() => navigate('PokemonData', { pokemonData, title })}>
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
