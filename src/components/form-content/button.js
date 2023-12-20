import { Text, TouchableOpacity, View } from "react-native"

import Icon from 'react-native-vector-icons/Ionicons';

export const ButtonSafePlace = ({placeholder, icon, onPress}) => {
    return (
       <TouchableOpacity onPress={onPress}>
            <View style={{flexDirection: 'row', justifyContent:'space-around', borderWidth:1, borderColor:'#064580', padding: 15, backgroundColor: 'rgba(216, 226, 255, 1)', borderRadius: 5}}>
                <Text style={{ color: '#2245A6', fontWeight:600}}>{placeholder}</Text>
                { icon && (
                    <Icon name={icon} size={15} color={'#064580'} />
                )}
            </View>
        </TouchableOpacity>
    )
}