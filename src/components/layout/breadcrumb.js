import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


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
      button: {
        // backgroundColor: '#FFF',
        // width: 50,
        // height: 50,
        // padding: 7,
        // color: '#064580',
        // borderRadius: '50%',
        // alignItems: 'center',
        // justifyContent: 'center'
      },
      containerHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-around',
        padding: 10,
      },
      pageTitle: {
        textAlign: 'center',
        fontSize: '22',
        color: 'rgba(6, 69, 128, 1)',
        fontWeight:900
      },
      pageSubtitle: {
        fontSize: 13,
        marginTop: 5,
        marginLeft:5
      },
      containerIconsListType: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btnList: {
        padding: 5
        // color: '#064580',
        // backgroundColor: 'red',
        // padding: 5,
        // textDecorationColor: 'white'
      }
});

const Breadcrumb = ({back, ...props}) => {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.containerHeader}>
                <View>
                    { back && (
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigation.navigate(back || 'Home')}
                        // onPress={() => navigation.goBack()}
                        >
                        <Icon name="arrow-back-circle-outline" size={30} color="#064580" />
                        {/* <Text> {'<'} </Text> */}
                        </TouchableOpacity>
                    )}
                  
                </View>
                <View style={{textAlign: 'center', flexGrow: 1, flex: 1, flexDirection: 'row', justifyContent:'center'}}>
                    <>
                        { props.title && (
                            <Text style={styles.pageTitle}>{props.title}</Text> 
                        )}

                        { props.subTitle && (
                            <Text style={styles.pageSubtitle}>| {props.subTitle}</Text>
                        )}
                        
                    </>
                </View>
                <View>
                    {props.add && (
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(props.add)}>
                            {/* <Text>+</Text> */}
                            
                            <Icon name="add-circle-outline" size={30} color="#064580" />
                        </TouchableOpacity>
                    )}
                    { !props.add && (
                        <View style={{width: 40}}>
                            {/* <Text>a</Text> */}
                            {/* <TouchableOpacity style={styles.btnList}> 
                                <Icon name="grid-outline" size={20} color="#064580" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnList}>
                                <Icon name="menu-outline" size={30} color="#064580" />
                            </TouchableOpacity> */}
                        </View>
                    )}
                    
                </View>
            </View>
            { props.showListType && (
                <View style={styles.containerIconsListType}>
                    <TouchableOpacity style={styles.btnList}> 
                        <Icon name="grid-outline" size={20} color="#064580" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnList}>
                        <Icon name="menu-outline" size={30} color="#064580" />
                    </TouchableOpacity>
                </View>
            )}
            
        </>
      
    )
}

export default Breadcrumb;
