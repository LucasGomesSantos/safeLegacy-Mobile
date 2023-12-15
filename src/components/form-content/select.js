import RNPickerSelect from 'react-native-picker-select';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const SelectSafePlace = ({options, placeholder, selected}) => {
    return (
        <>
            
            <RNPickerSelect
                // style={{backgroundColor:'black'}}
                onValueChange={(value) => console.log(value)}
                // placeholder={placeholder}
                items={options.map((value) => {
                    return { 
                        label:value.name, 
                        value: value.id
                    };
                })}
            >
                <View style={{ flexDirection: 'row', backgroundColor: 'rgba(34, 69, 166, 0.1)', padding: 15, justifyContent: 'space-between'}}>
                    <Text style={{ color: '#064580', fontWeight:400}}>
                        {placeholder}
                    </Text>  
                    <Icon name={'chevron-down-outline'} size={15} color={'#064580'} />
                    
                </View>
            </RNPickerSelect>
        </>
    )
}