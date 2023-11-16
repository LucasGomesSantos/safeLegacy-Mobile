import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Poppins_100Thin, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black } from '@expo-google-fonts/dev'

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/context'
const STYLES = ['default', 'dark-content', 'light-content'];

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_100Thin, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold, Poppins_900Black
  });
  const [statusBarStyle, setStatusBarStyle] = useState(
    STYLES[1],
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle={statusBarStyle} />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}