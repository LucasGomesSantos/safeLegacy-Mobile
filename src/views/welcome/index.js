import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from '@react-navigation/native';

export default function App() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#65827A', '#064580']}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SafePlace</Text>
        <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Make sure this covers the whole screen
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
    fontWeight: 'bold', // Corrected this value
    marginBottom: 296,
    marginTop: 241,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonOutline: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  buttonOutlineText: {
    color: 'white',
  },
});
