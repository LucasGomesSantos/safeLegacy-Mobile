import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import { ButtonSafePlace } from '../form-content/button';


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
      },
      tituloHerdeiro: {
        fontWeight: 'bold',
        color: '#064580'
      }
});

export const AdicionarHerdeiro = ({
    herdeiros,
}) => {
    const navigation = useNavigation();

    if (!herdeiros) {
        herdeiros = []
    }

        return (
            <View style={styles.containerContent}>
                 <ButtonSafePlace 
                        placeholder="Adicionar Herdeiro"
                        icon=""
                        onPress={() => false}
                    />

                { herdeiros.map((herdeiro, index) => {
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' , backgroundColor: 'white', padding: 15, marginTop: 5, marginBottom: 5}} key={index}>
                            <View >
                                <Icon name={'person-outline'} size={17} color={herdeiro.selected ? 'green' : 'gray'} />
                            </View>
                            <View style={{width: '40%'}}>
                                <Text style={styles.tituloHerdeiro}>{herdeiro.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.tituloHerdeiro}>
                                    {herdeiro.percentage}
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', gap: 7 }}>
                                <TouchableOpacity>
                                    <Icon name={'create-outline'} size={20} color={'gray'} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Icon name={'trash-outline'} size={20} color={'red'} />
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    )
                })}
                <View style={{marginTop: 20}}>
                    <ButtonSafePlace 
                            placeholder="Salvar"
                            icon=""
                            onPress={() => false}
                        />
                </View>
            </View>
            
        )

    
}
