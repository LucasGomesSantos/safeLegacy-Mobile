import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../../context';
import Layout from '../../../components/layout';
import { TextSafePlace } from '../../../components/form-content/text';
import { SelectSafePlace } from '../../../components/form-content/select';
import { ButtonSafePlace } from '../../../components/form-content/button';
import { FileSafePlace } from '../../../components/form-content/file';


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

const Content = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.containerContent}>
            <ScrollView>
                <View style={{gap: 10}}>
                <SelectSafePlace
                    options={[{id:1, name: 'Casa'},{id:2, name: 'Apartamento'},{id:3, name: 'Sítio'},{id:4, name: 'Chácara'},{id:5, name: 'Fazenda'},]}
                    selected=""
                    placeholder="Tipo de Imóvel"
                />
                 <TextSafePlace
                    name="cep"
                    placeholder="CEP"
                    value=""  
                />
                <TextSafePlace
                    name="rua"
                    placeholder="Endereço"
                    value=""
                />
                <TextSafePlace
                    name="numero"
                    placeholder="Número"
                    value=""
                />
                <TextSafePlace
                    name="complemento"
                    placeholder="Complemento"
                    value=""
                />
                <TextSafePlace
                    name="bairro"
                    placeholder="Bairro"
                    value=""
                />
                <TextSafePlace
                    name="cidade"
                    placeholder="Cidade"
                    value=""
                />
                <TextSafePlace
                    name="estado"
                    placeholder="Estado"
                    value=""
                /> 
                <FileSafePlace />
                <ButtonSafePlace 
                    placeholder="Continuar"
                    icon=""
                />
                </View>
            </ScrollView>
        </View>
    )
}

export const AdicionarImovel = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();
    return (
        <View style={styles.container}>
           <Layout 
                content={Content} 
                breadcrumbTitle="Adicionar Imóvel"
                // breadcrumbSubtitle={""}
                // add="Imoveis/Adicionar"
                back="listImoveis"
                // showListType={true}
                header='off'
            />
        </View>

    );
};

