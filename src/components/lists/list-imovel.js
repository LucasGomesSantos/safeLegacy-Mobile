import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';



const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginBottom: 7,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EBEBEB',
    borderRadius: 10,

  },
  btnDeletar: {
    backgroundColor: '#EA5252',
    width: '50%',
    borderEndEndRadius: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  btnEditar: {
    backgroundColor: '#DCE4F9',
    width: '50%',
    borderEndEndRadius: 5,
    paddingTop: 3,
    paddingBottom: 3,
  },
  mainContent: {
    padding: 15
  },
  containerButtons :{
    // flex: 1,
    flexDirection: 'row',
    // flexGrow: 1,
    // flexWrap: 'wrap'
  }
});

const ListImovel = ({item}) => {

    const navigation = useNavigation();
    return (
        <View style={styles.card}>

            <View style={styles.mainContent}>
                <View style={{flexDirection: 'row', borderBottomColor: 'gray', borderBottomWidth: 1, paddingBottom: 5}}>
                    <Text style={{fontSize: 16, color: '#2245A6', fontWeight: '500'}}>Endereço:</Text>
                    <Text style={{fontSize: 14, color: '#2245A6', marginTop: 2, marginLeft: 5, fontWeight: '500'}}>{item.address}</Text>
                </View>
                <View  style={{flexDirection:'row', marginTop: 15}}>
                    <Text style={{marginRight: 10, fontSize: 12, marginTop: 3, color: '#2245A6'}}>Participantes:</Text>
                    {/* <View> */}
                        <View style={{width: 20, height: 20, borderRadius: '50%', marginLeft: -3, backgroundColor: 'blue'}}>
                            {/* <Text>.</Text> */}
                        </View>
                        <View style={{width: 20, height: 20, borderRadius: '50%', marginLeft: -3, backgroundColor: 'red'}}>
                            {/* <Text>.</Text> */}
                        </View>
                        <View style={{width: 20, height: 20, borderRadius: '50%', marginLeft: -3, backgroundColor: 'gray'}}>
                            {/* <Text>.</Text> */}
                        </View>
                    {/* </View> */}
                </View>
            </View>
            
            { item.selected && (
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.btnEditar}>
                        <Text style={{textAlign: 'center', color: '#2245A6', fontSize: 15}}>
                            Editar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDeletar}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                            Deletar
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            
        </View>
    )
}

export default ListImovel;
