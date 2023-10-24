import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Poppins_100Thin, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/dev'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}