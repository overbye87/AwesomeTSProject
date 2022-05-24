import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PhotoFile } from 'react-native-vision-camera';
import { NavigationCommon } from '../../../../App';
import { styles } from './PhotoItem.styles';

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

export default PhotoItem;
