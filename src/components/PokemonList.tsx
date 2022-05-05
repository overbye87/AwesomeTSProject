import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useTypedDispatch, useTypedSelector } from '../store/store';
import { additionalLoadingThunk, getPokemonsThunk } from '../store/thunks';
import { IPokemonFullData } from '../types/pokemonsTypes';
import PokemonItem from './PokemonItem';

const params = { limit: 10, offset: 0 };

const PokemonList: React.FC = () => {
  const dispatch = useTypedDispatch();
  const pokemonsArray = useTypedSelector(({ pokemons }) => pokemons.pokemonsArray);

  useEffect(() => {
    dispatch(getPokemonsThunk(params));
  }, [dispatch]);

  const renderPokemon: ListRenderItem<IPokemonFullData> = ({ item }) => (
    <PokemonItem pokemon={item} />
  );

  const onEndReached = () => {
    dispatch(additionalLoadingThunk({ limit: 10, offset: pokemonsArray.length }));
  };

  return (
    <View>
      <FlatList
        data={pokemonsArray}
        renderItem={renderPokemon}
        keyExtractor={(item) => item.name}
        onEndReachedThreshold={0.25}
        onEndReached={onEndReached}
      />
    </View>
  );
};

export default PokemonList;
