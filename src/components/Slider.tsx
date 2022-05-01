/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../theme';
type props = {
  uris: string[];
};
const Slider: React.FC<props> = props => {
  const [uriIndex, setUriIndex] = useState(0);
  return (
    <View style={styles.сontainer}>
      <TouchableOpacity
        style={styles.left}
        onPress={() =>
          setUriIndex(prev => (prev === 0 ? props.uris.length - 1 : prev - 1))
        }>
        <Text style={styles.arrow}>⇐</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: props.uris[uriIndex],
        }}
        style={{width: 96, height: 96}}
      />
      <TouchableOpacity
        style={styles.right}
        onPress={() =>
          setUriIndex(prev => (prev === props.uris.length - 1 ? 0 : prev + 1))
        }>
        <Text style={styles.arrow}>⇒</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.background,
  },
  right: {},
  left: {},
  arrow: {
    fontSize: 50,
    lineHeight: 50,
    color: theme.color.white,
  },
});

export default Slider;
