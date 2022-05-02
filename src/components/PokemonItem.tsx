import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {theme} from '../theme';
import {IPokemon, IPokemonData} from '../types';

type props = {
  pokemon: IPokemon;
};
const PokemonItem: React.FC<props> = props => {
  const [pokemonData, setPokemonData] = useState<null | IPokemonData>(null);
  const {navigate} = useNavigation();
  useEffect(() => {
    axios.get(props.pokemon.url).then(res => {
      setPokemonData(res.data);
    });
  }, [props.pokemon.url]);
  const title = pokemonData?.name.toUpperCase();
  if (!pokemonData) {
    return <></>;
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
          onPress={() => navigate('PokemonData', {pokemonData, title})}>
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
