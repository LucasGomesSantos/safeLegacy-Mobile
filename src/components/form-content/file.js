import { Button, View, Text } from 'react-native';
// import DocumentPicker from 'react-native-document-picker'
// não consegui fazer funcionar 


export const FileSafePlace = ({}) => {

    const handleDocumentSelection = async () => {
    //     try {
    //       const res = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.allFiles],
    //         // You can also specify specific file types, like images, PDFs, etc.
    //       });
    
    //       // 'res' has the file details, URI, type, file name, size etc.
    //       console.log(
    //         res.uri,
    //         res.type, // mime type
    //         res.name,
    //         res.size
    //       );
    //     } catch (err) {
    //       if (DocumentPicker.isCancel(err)) {
    //         console.log('User cancelled the document picker');
    //       } else {
    //         throw err;
    //       }
    //     }
      };

    return (
        <View>
            <Button title="Select File" onPress={handleDocumentSelection} />
        </View>
    )
}