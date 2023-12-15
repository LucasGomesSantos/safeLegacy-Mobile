import { TextInput } from "react-native"

export const TextSafePlace = ({name, placeholder, value}) => {
    return (
        <TextInput 
            type="text" 
            placeholder={placeholder} 
            defaultValue={value} 
            placeholderTextColor={'#064580'}
            style={{
                // borderWidth:1,
                // borderColor: '#064580',
                borderRadius: 5,
                padding:15,
                fontWeight:500,
                backgroundColor: 'rgba(34, 69, 166, 0.1)',
                color: '#064580'
            }}
        />
    )
}