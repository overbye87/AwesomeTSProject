import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, ListRenderItem, View } from 'react-native';
import PokemonItem from './PokemonItem';

interface IPokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const [pokemonListArray, setPokemonListArray] = useState<IPokemon[]>([]);

  const getPokemonList = async () => {
    try {
      const url = 'pokemon?limit=20&offset=0';
      const res = await axios.get(url);
      setPokemonListArray(res.data.results);
    } catch (error) {
      Alert.alert(
        'Can not get pokemon list',
        JSON.stringify((error as Error).message),
      );
    }
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const renderPokemon: ListRenderItem<IPokemon> = ({ item }) => (
    <PokemonItem pokemon={item} />
  );

  return (
    <View>
      <FlatList
        data={pokemonListArray}
        renderItem={renderPokemon}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default PokemonList;
