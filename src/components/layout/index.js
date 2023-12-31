import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuth } from '../../context';
import Header from '../header';
import Breadcrumb from './breadcrumb';


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
        flexGrow:1,
        // marginBottom: 225
        // backgroundColor: '#fff',
      },
      btnHeader: {
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
        fontSize: '1.75rem',
        color: '#064580'
      }
});


const Layout = ( {Content, breadcrumbTitle, breadcrumbSubtitle, add, back, showListType, header} ) => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator();


    let marginBottom = 100;
    if(header !== 'off') {
        marginBottom = 255
    }

    if(showListType) {
        marginBottom += 30
    }

    return (
        <View style={{...styles.container, marginTop: 10, marginBottom:marginBottom }}>
            {header !== 'off' && (
                <View style={styles.header}>
                    <Header userName={user.name} />
                </View>
            )}
            
            <View style={{ marginTop: (header === 'off') ? 40 : 0}}>
                <Breadcrumb 
                    title={breadcrumbTitle} 
                    subTitle={breadcrumbSubtitle} 
                    add={add} 
                    back={back}
                    showListType={showListType}
                />
            </View>
{/*             
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'InitialScreen') {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'ios-person' : 'ios-person-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                        }
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                    tabBarStyle: {
                    backgroundColor: '#064580',
                    },
                    headerShown: false
                })}
            >
                <Tab.Screen name="InitialScreen" component={content} />
                <Tab.Screen name="Profile" component={content} />
                <Tab.Screen name="Settings" component={content} />
            </Tab.Navigator> */}
            <View >
                <ScrollView>
                    <Content />
                </ScrollView>

            </View>
            
        </View>

    );
};

export default Layout;
