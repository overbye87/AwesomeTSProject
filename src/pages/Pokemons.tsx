import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import Pokemon from '../components/Pokemon';

interface IPokemon {
  name: string;
  url: string;
}

const Pokemons: React.FC = () => {
  const [PokemonList, setPokemonList] = useState<IPokemon[]>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then(res => {
        setPokemonList(res.data.results);
      });
  }, []);

  const renderPokemon: ListRenderItem<IPokemon> = ({item}) => (
    <Pokemon pokemon={item} />
  );

  return (
    <View>
      <FlatList
        data={PokemonList}
        renderItem={renderPokemon}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Pokemons;
