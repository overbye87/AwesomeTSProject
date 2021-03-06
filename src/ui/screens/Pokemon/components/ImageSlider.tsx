/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../../../components/CustomText';
import { styles } from './ImageSlider.styles';

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
        <CustomText style={styles.arrow}>⇐</CustomText>
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
        <CustomText style={styles.arrow}>⇒</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default ImageSlider;
