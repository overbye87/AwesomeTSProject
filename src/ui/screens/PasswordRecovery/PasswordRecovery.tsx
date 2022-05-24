import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationCommon } from '../../../App';
import { styles } from './PasswordRecovery.styles';

const PasswordRecovery: React.FC = () => {
  const navigation = useNavigation<NavigationCommon<'PasswordRecovery'>>();

  return (
    <>
      <View style={styles.сontainer}>
        <View>
          <Text style={styles.logoText}>FORGOT PASSWORD?</Text>
        </View>
      </View>
      <View style={styles.сontainer}>
        <TextInput style={styles.input} placeholder="EMAIL" />
        <TouchableOpacity style={styles.signButton} onPress={() => null}>
          <Text style={styles.signText}>REMIND ME</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PasswordRecovery;
