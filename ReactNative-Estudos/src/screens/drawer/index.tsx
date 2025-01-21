import { Text, View, StyleSheet } from "react-native";
//<View></View> -> div
//<Text></Text> -> span / p
export default function App(){ 
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>App</Text>
        </View>
    )
}

//criando estilos

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        color: 'red',
    }
})//o eixo cruzado do celular é vertical, diferente do computador, que é na horizontal
//usar tailwind -> biblioteca NativeWind, recomendavel não usar para não gerar incompatibilidade
