import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context';
import Header from '../../components/header';
import Bens from '../../views/bens';
import MenuOptions from '../menuOptions'


export default function Test() {
  // const navigation = useNavigation();
  const { user } = useAuth();
  const Tab = createBottomTabNavigator();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header userName={'user name'} />
      </View>
     Hello teste
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  menuItem: {
    backgroundColor: '#e6e6e6',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
  },
});

