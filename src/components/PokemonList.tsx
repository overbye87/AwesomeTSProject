import axios from '../api/axios';
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import Pokemon from './PokemonItem';

interface IPokemon {
  name: string;
  url: string;
}

const PokemonList: React.FC = () => {
  const [PokemonListArray, setPokemonListArray] = useState<IPokemon[]>([]);

  const getPokemonList = async () => {
    const url = 'pokemon?limit=20&offset=0';
    const res = await axios.get(url);
    setPokemonListArray(res.data.results);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const renderPokemon: ListRenderItem<IPokemon> = ({item}) => (
    <Pokemon pokemon={item} />
  );

  return (
    <View>
      <FlatList
        data={PokemonListArray}
        renderItem={renderPokemon}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default PokemonList;
