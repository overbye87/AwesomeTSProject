import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useTypedDispatch, useTypedSelector } from '../../store/store';
import { additionalLoadingThunk } from '../../store/pokemons/pokemonsThunks';
import { IPokemonFullData } from '../../types/pokemonsTypes';
import PokemonItem from './PokemonItem';
import { setPokemons } from '../../store/pokemons/pokemonsSlice';
import Loading from '../Loading';

const initialParams = { limit: 10, offset: 0 };

const renderPokemon: ListRenderItem<IPokemonFullData> = ({ item }) => (
  <PokemonItem pokemon={item} />
);

const handleKeyExtractor = (item: IPokemonFullData) => item.name;

const PokemonList: React.FC = () => {
  const dispatch = useTypedDispatch();
  const pokemonsArray = useTypedSelector(({ pokemons }) => pokemons.pokemonsArray);

  useEffect(() => {
    dispatch(setPokemons([]));
    dispatch(additionalLoadingThunk(initialParams));
  }, [dispatch]);

  const handleEndReached = () => {
    dispatch(additionalLoadingThunk({ limit: 10, offset: pokemonsArray.length }));
  };

  console.log('*** render pokemon list');

  if (!pokemonsArray.length) {
    return <Loading />;
  }
  return (
    <View>
      <FlatList
        data={pokemonsArray}
        renderItem={renderPokemon}
        keyExtractor={handleKeyExtractor}
        onEndReachedThreshold={0.25}
        onEndReached={handleEndReached}
      />
    </View>
  );
};

export default PokemonList;
