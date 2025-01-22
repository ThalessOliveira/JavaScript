import { View, Text, Image, StyleSheet } from "react-native"

export default function Imagem(){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Imagem Local</Text>
            <Image
                source={require('../../../assets/images/react-logo.png')} //imagens locais-> require
                style={styles.imagemLocal}
            />
            <Text style={styles.label}>Imagem Online</Text>
            <Image
                source={{uri: 'https://dummyimage.com/300x200/000/fff'}} //imagens online -> uri: 'sua url aqui'
                style={styles.imagemRemota}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        textAlign: 'center',
        fontSize: 16,
        padding: 5,
    },
    imagemLocal:{
        width: 200,
        height: 200,
    },
    imagemRemota:{
        width: 300,
        height: 200,
    }
})