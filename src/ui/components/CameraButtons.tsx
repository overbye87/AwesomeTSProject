import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationCommon } from '../../App';
import { theme } from '../../theme';

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
interface Props {
  onTakePhoto: () => void;
  onFlipCamera: () => void;
}

const CameraButtons: React.FC<Props> = (props) => {
  const { navigate } = useNavigation<NavigationCommon<'CameraVision'>>();

  return (
    <View style={styles.allContainer}>
      <View style={styles.itemsContainer}>
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

export default CameraButtons;
