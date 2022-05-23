import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationCommon } from '../../App';
import { theme } from '../styles/theme';

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

const styles = StyleSheet.create({
  сontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    backgroundColor: theme.color.logoBackground,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  logoText: {
    color: theme.color.mainText,
    fontSize: 30,
  },
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderColor: theme.color.mainText,
    marginBottom: 20,
  },
  forgotPassword: {
    width: 300,
    textAlign: 'right',
  },
  signButton: {
    marginTop: 40,
    width: 300,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.color.logoBackground,
  },
  signText: {
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 20,
    color: theme.color.white,
  },
});

export default PasswordRecovery;
