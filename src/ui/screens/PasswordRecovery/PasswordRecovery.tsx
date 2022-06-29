// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../../components/CustomText';
// import { NavigationCommon } from '../../../App';
import { styles } from './PasswordRecovery.styles';

const PasswordRecovery: React.FC = () => {
  // const navigation = useNavigation<NavigationCommon<'PasswordRecovery'>>();

  return (
    <>
      <View style={styles.сontainer}>
        <View>
          <CustomText style={styles.logoText}>FORGOT PASSWORD?</CustomText>
        </View>
      </View>
      <View style={styles.сontainer}>
        <CustomTextInput style={styles.input} placeholder="EMAIL" />
        <TouchableOpacity style={styles.signButton} onPress={() => null}>
          <CustomText style={styles.signText}>REMIND ME</CustomText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PasswordRecovery;
