import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList, RouteCommon } from '../../../../App';

import Slider from './ImageSlider';
import { useTypedSelector } from '../../../../store/store';
import { styles } from './PokemonData.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'PokemonData'>;

const PokemonData: React.FC<Props> = () => {
  const { params } = useRoute<RouteCommon<'PokemonData'>>();
  const { id } = params;
  const pokemonsArray = useTypedSelector(({ pokemons }) => pokemons.pokemonsArray);
  const pokemonData = pokemonsArray?.find((item) => item.id === id);

  if (!pokemonData) return null;

  const uris = [
    pokemonData.sprites.other['official-artwork'].front_default,
    pokemonData.sprites.other.home.front_default,
    pokemonData.sprites.other.home.front_shiny,
  ];

  return (
    <View>
      <Slider uris={uris} />
      <Text style={styles.statHeader}>Stats:</Text>
      <View style={styles.statContainer}>
        <View style={styles.statLeft}>
          {pokemonData.stats.map((stat) => (
            <Text
              key={`${pokemonData.name}${stat.stat.name}`}
              style={styles.statText}>
              {stat.stat.name}
            </Text>
          ))}
        </View>
        <View style={styles.statRight}>
          {pokemonData.stats.map((stat) => (
            <Text
              key={`${pokemonData.name}${stat.stat.name}${stat.base_stat}`}
              style={styles.statText}>
              {stat.base_stat}
            </Text>
          ))}
        </View>
      </View>
      <Text style={styles.statHeader}>Abilities:</Text>
      {pokemonData.abilities.map((item) => (
        <Text
          key={`${pokemonData.name}${item.ability.name}`}
          style={styles.statAbility}>
          {item.ability.name}
        </Text>
      ))}
    </View>
  );
};

export default PokemonData;
