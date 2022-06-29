import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { PhotoFile } from 'react-native-vision-camera';
import CustomText from '../../../components/CustomText';
// import { NavigationCommon } from '../../../../App';
import { styles } from './PhotoItem.styles';

type Props = {
  result: PhotoFile;
};

const win = Dimensions.get('window');

const PhotoItem: React.FC<Props> = (props) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  // const { navigate } = useNavigation<NavigationCommon<'CameraVision'>>();

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
        <CustomText style={styles.id}>{props.result.metadata['{Exif}'].DateTimeOriginal}</CustomText>
        <CustomText style={styles.name}>{props.result.width} x {props.result.height}</CustomText>
        <CustomText style={styles.description}>{props.result.path}</CustomText>
        <TouchableOpacity
          style={styles.dataButton}
          onPress={() => setIsFullScreen((prev) => !prev)}>
          <CustomText style={styles.dataText}>VIEW</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhotoItem;
