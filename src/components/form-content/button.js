import { Text, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonSafePlace = ({placeholder, icon}) => {
    return (
       <TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent:'space-around', borderWidth:1, borderColor:'#064580', padding: 15, backgroundColor: 'rgba(34, 69, 166, 0.1)',}}>
                <Text style={{ color: '#064580', fontWeight:600}}>{placeholder}</Text>
                { icon && (
                    <Icon name={icon} size={15} color={'#064580'} />
                )}
            </View>
        </TouchableOpacity>
    )
}