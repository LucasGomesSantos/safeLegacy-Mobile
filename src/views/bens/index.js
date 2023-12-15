import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import { useAuth } from '../../context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Layout from '../../components/layout';


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
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f8f8f8',
      },
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      btnVoltar: {
        backgroundColor: '#FFF',
        // width: `40px`,
        // height: `40px`,
        padding: 7,
        color: '#064580',
        borderRadius: '50%'
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
        marginTop:3,
        color: '#064580'
      }
});

const main = () => {
    const navigation = useNavigation();
    return (
        <View>
            <ScrollView>
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('listImoveis')}>
                        <Icon name="home-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Imóveis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('listVeiculos')}>
                        <Icon name="car-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Veículos</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('listBancosInvestimentos')}>
                        <Icon name="wallet-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Bancos e Investimentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, styles.menuItemSpecial]} onPress={() => navigation.navigate('listBensMateriais')}>
                        <Icon name="laptop-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Bens Materiais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, styles.menuItemSpecial]} onPress={() => navigation.navigate('listPets')}>
                        <Icon name="paw-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Pets</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, styles.menuItemSpecial]} onPress={() => navigation.navigate('listRedesSociais')}>
                        <Icon name="lock-open-outline" size={30} color="#6B8265" />
                        <Text style={styles.menuText}>Redes Sociais</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const MeusBens = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    return (
        <Layout 
          content={main} 
          breadcrumbTitle={'Meus Bens'}
          backTo="Home"
          showListType={false}
        //   breadcrumbSubtitle={}
        //   add
        />

    );
};

export default MeusBens;
