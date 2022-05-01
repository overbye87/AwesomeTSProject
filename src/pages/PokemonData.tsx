import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Slider from '../components/Slider';
import {IPokemonData} from '../types';

// type props = {
//   pokemonData: IPokemonData;
// };

const PokemonData: React.FC = ({route}) => {
  const {pokemonData} = route.params;
  const uris = [
    pokemonData.sprites.front_default,
    pokemonData.sprites.back_default,
    pokemonData.sprites.front_shiny,
    pokemonData.sprites.back_shiny,
  ];
  //console.log(pokemonData.sprites.);
  return (
    <View>
      <Text>PokemonData</Text>
      <Slider uris={uris} />
      {pokemonData.stats.map(stat => (
        <Text key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </Text>
      ))}
    </View>
  );
};

export default PokemonData;
