import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../../context';
import Header from '../../../components/header';
import Layout from '../../../components/layout';
import ListImovel from '../../../components/lists/list-imovel';


const styles = StyleSheet.create({
    containerContent: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        padding: 20,
    },
    menuItem: {
        backgroundColor: '#FFF',
        width: '40%', // Aproximadamente para caber dois itens por linha
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    menuItemSpecial: {
        position: 'relative',
    },
    menuText: {
        fontSize: 16,
        marginTop: 10,
        color: '#2245A6'
    },
    badge: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#FFF',
        fontSize: 14,
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8',
      },
    container: {
        flex: 1,
      },
      button: {
        backgroundColor: '#FFF',
        width: 50,
        height: 50,
        padding: 7,
        color: '#064580',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center'
      },
      containerHeaderVoltar: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        padding: 10,
      },
      pageTitle: {
        textAlign: 'center',
        fontSize: '20',
        color: '#064580',
      },
      pageSubtitle: {
        fontSize: 13,
        marginTop: 5,
        marginLeft:5
      }
});

const Main = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerContent}>

            <FlatList
                data={[{
                    participantes: [],
                    address: 'Rua da colina, 123',
                    selected: true
                }, {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                }, {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                },
                {
                    participantes: [],
                    address: 'Rua da colina, 123',
                }]}
                renderItem={ (item) => <ListImovel item={item.item} selected={item.selected} />}
                keyExtractor={ item => item.id}
            >
            </FlatList>
        </View>
    )
}

const Pets = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    return (
        <View style={styles.container}>
           <Layout 
                Content={Main} 
                breadcrumbTitle="Meus Bens"
                breadcrumbSubtitle={"Pets"}
                add
                back="MeusBens"
                showListType={true}
            />
        </View>

    );
};

export default Pets;
