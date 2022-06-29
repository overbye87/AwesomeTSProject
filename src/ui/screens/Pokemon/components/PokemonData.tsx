import { useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import Slider from './ImageSlider';
import { useTypedSelector } from '../../../../store/store';
import { styles } from './PokemonData.styles';
import { CommonStackParamList, RouteCommonStack } from '../../../navigation/CommonNavigator';
import CustomText from '../../../components/CustomText';

type Props = NativeStackScreenProps<CommonStackParamList, 'PokemonData'>;

const PokemonData: React.FC<Props> = () => {
  const { params } = useRoute<RouteCommonStack<'PokemonData'>>();
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
      <CustomText style={styles.statHeader}>Stats:</CustomText>
      <View style={styles.statContainer}>
        <View style={styles.statLeft}>
          {pokemonData.stats.map((stat) => (
            <CustomText
              key={`${pokemonData.name}${stat.stat.name}`}
              style={styles.statText}>
              {stat.stat.name}
            </CustomText>
          ))}
        </View>
        <View style={styles.statRight}>
          {pokemonData.stats.map((stat) => (
            <CustomText
              key={`${pokemonData.name}${stat.stat.name}${stat.base_stat}`}
              style={styles.statText}>
              {stat.base_stat}
            </CustomText>
          ))}
        </View>
      </View>
      <CustomText style={styles.statHeader}>Abilities:</CustomText>
      {pokemonData.abilities.map((item) => (
        <CustomText
          key={`${pokemonData.name}${item.ability.name}`}
          style={styles.statAbility}>
          {item.ability.name}
        </CustomText>
      ))}
    </View>
  );
};

export default PokemonData;
