import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ userName }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.userInfo}>
                <View style={styles.avatarPlaceholder} />
                <Text style={styles.greetingText}>Olá, {userName}</Text>
                <IconCommunity name="crown-outline" size={24} color="#FFD700" />
                <TouchableOpacity>
                    <Icon name="notifications" size={24} color="#FF0000" />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar"
                />
                <Icon name="search" size={24} color="#000" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#C4C4C4',
        marginRight: 10,
    },
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        paddingVertical: 10,
        color: '#000',
    },
});

export default Header;