import { View, StyleSheet, Text, Image } from "react-native";

export default function Inicio(){
    return(
        <View style={styles.container}>
            {/* importando imagem: */}
            <Image
                style={styles.imagem}
                source={require('../../../assets/images/react-logo.png')}
            />

            <Text style={styles.titulo}>React Native Estudos</Text>
            <Text style={styles.ajuda}>
                Use o Drawer Navigation na parte superior esquerda da tela para navegar.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        fontSize: 24,
        fontWeight: '300',
    },
    ajuda:{
        fontSize: 14,
        color: '#665',
        textAlign: 'center',
        paddingHorizontal: 30,
    },
    imagem:{
        width: 200,
        height: 200,
    }
})