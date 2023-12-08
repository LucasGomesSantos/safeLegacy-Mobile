import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const MenuOptions = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('MeusBens')}>
                <Icon name="home-outline" size={30} color="#65827A" />
                <Text style={styles.menuText}>Meus Bens</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="book-outline" size={30} color="#65827A" />
                <Text style={styles.menuText}>Recordações e fotos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="account-outline" size={30} color="#65827A" />
                <Text style={styles.menuText}>Participantes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.menuItem, styles.menuItemSpecial]}>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>+1</Text>
                </View>
                <Icon name="alert-outline" size={30} color="#65827A" />
                <Text style={styles.menuText}>Pendências</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
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
});

export default MenuOptions;
