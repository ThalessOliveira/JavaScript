import { View, StyleSheet, Pressable, Text, Image } from "react-native";

export default function Pressionavel(){
    const quandoClicar = () => {
        alert('Botão acionado!')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.primario}>Botão comum:</Text>
            <Pressable style={styles.botao} onPress={quandoClicar}>
                <Text style={styles.textoBotao}>Clique</Text>
            </Pressable>
            <Text style={styles.primario}>Botão em imagem:</Text>
            <Pressable onPress={quandoClicar}>
                <Image
                    source={require('../../../assets/images/react-logo.png')}
                    style={styles.localImage}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primario:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        padding: 12,
    },
    botao:{
        backgroundColor: '#ff0000',
        padding: 8,
        borderRadius: 12,
    },
    textoBotao:{
        color: 'white',
        fontSize: 24,
    },
    localImage:{
        width: 200,
        height: 200,
    }
})

