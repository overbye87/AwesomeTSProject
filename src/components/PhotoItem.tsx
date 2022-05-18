import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PhotoFile } from 'react-native-vision-camera';
import { theme } from '../theme';
import { NavigationCommon } from '../App';

type Props = {
  result: PhotoFile;
};

const win = Dimensions.get('window');

const PhotoItem: React.FC<Props> = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { navigate } = useNavigation<NavigationCommon<'CameraVision'>>();

  if (!props.result) {
    return null;
  }

  if (isFullScreen) {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => setIsFullScreen((prev) => !prev)}
        >
        <Image
          source={{ uri: `file://${props.result.path}` }}
          style={{
            flex: 1, width: win.width, height: win.height, resizeMode: 'contain',
          }}
        />
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={styles.сontainer}>
      <Image
        source={{ uri: `file://${props.result.path}` }}
        style={styles.pokemonImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.id}>{props.result.metadata['{Exif}'].DateTimeOriginal}</Text>
        <Text style={styles.name}>{props.result.width} x {props.result.height}</Text>
        <Text style={styles.description}>{props.result.path}</Text>
        <TouchableOpacity
          style={styles.dataButton}
          onPress={() => setIsFullScreen((prev) => !prev)}>
          <Text style={styles.dataText}>VIEW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  сontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.color.logoBackground,
    borderRadius: 5,
    margin: 5,
    padding: 5,
  },
  pokemonImage: {
    width: 96,
    height: 96,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 5,
  },
  id: {
    position: 'absolute',
    top: 0,
    right: 5,
  },
  name: {
    color: theme.color.headerDark,
    textTransform: 'uppercase',
  },
  description: {
    // textTransform: 'capitalize',
  },
  dataButton: {
    width: 100,
    padding: 3,
    backgroundColor: theme.color.logoBackground,
    borderRadius: 3,
    alignSelf: 'flex-end',
  },
  dataText: {
    textAlign: 'center',
  },
});

export default PhotoItem;
