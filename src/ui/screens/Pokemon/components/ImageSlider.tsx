/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  dotContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  dotActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  right: {},
  left: {},
  arrow: {
    fontSize: 50,
    lineHeight: 50,
    color: theme.color.white,
  },
});

type Props = {
  uris: string[];
};
const ImageSlider: React.FC<Props> = (props) => {
  const [uriIndex, setUriIndex] = useState(0);

  const incrementUriIndex = () => {
    setUriIndex((prev) => (prev === props.uris.length - 1 ? 0 : prev + 1));
  };

  const decrementUriIndex = () => {
    setUriIndex((prev) => (prev === 0 ? props.uris.length - 1 : prev - 1));
  };

  return (
    <View style={styles.сontainer}>
      <TouchableOpacity style={styles.left} onPress={decrementUriIndex}>
        <Text style={styles.arrow}>⇐</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: props.uris[uriIndex],
          }}
          style={{ width: 192, height: 192 }}
        />
        <View style={styles.dotContainer}>
          {props.uris.map((item, index) => (
            <View
              key={index}
              style={index === uriIndex ? styles.dotActive : styles.dot}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.right} onPress={incrementUriIndex}>
        <Text style={styles.arrow}>⇒</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSlider;
