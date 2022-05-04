import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../theme';

const CameraButtons = () => {
  return (
    <View style={styles.allContainer}>
      <View style={styles.itemsContainer}>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name={'ios-images-outline'}
            size={30}
            color={theme.color.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="ios-scan-circle-outline"
            size={60}
            color={theme.color.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name={'ios-camera-reverse-outline'}
            size={30}
            color={theme.color.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {},
});

export default CameraButtons;
