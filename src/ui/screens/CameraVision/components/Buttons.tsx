import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationCommon } from '../../../../App';
import { theme } from '../../../styles/theme';
import { styles } from './Buttons.styles';

interface Props {
  onTakePhoto: () => void;
  onFlipCamera: () => void;
}

const Buttons: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationCommon<'CameraVision'>>();

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate('MediaFiles')}
        >
          <Ionicons
            name={'ios-images-outline'}
            size={30}
            color={theme.color.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={props.onTakePhoto}
        >
          <Ionicons
            name="ios-scan-circle-outline"
            size={60}
            color={theme.color.white}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={props.onFlipCamera}
        >
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

export default Buttons;
