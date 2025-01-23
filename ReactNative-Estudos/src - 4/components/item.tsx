import { View, StyleSheet, Text, Image } from "react-native";

export interface ItemProps{
    principal: string
    secundario: string
}

export default function Item(props: ItemProps){
    return(
        <View style={styles.container}>
            <Text style={styles.primario}>{props.principal}</Text>
            <Text style={styles.secundario}>{props.secundario}</Text>
            <Image
                source={{uri: 'https://dummyimage.com/300x200/000/fff'}}
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
    primario:{
        fontWeight: 'bold',
        fontSize: 24,
    },
    secundario:{
        fontFamily: 'italic',
        fontSize: 24,
    },
    imagemRemota:{
        width: 300,
        height: 200,
    }
})