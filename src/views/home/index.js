import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#65827A', '#064580']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SafePlace</Text>

        <Text style={styles.title}>Lucas</Text>
      </View>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 48,
    marginBottom: 256,
    marginTop: 241,
    fontFamily: 'Poppins_700Bold'
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    marginBottom: 15,
  },
  buttonText: {
    color: '#2245A6',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins_400Regular'
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  buttonOutlineText: {
    color: 'white',
    fontFamily: 'Poppins_400Regular'
  },
});
