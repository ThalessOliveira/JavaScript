import { View, StyleSheet, Text, TextInput, Alert, Pressable } from 'react-native';
import { useState } from "react";

export default function Entrada(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const quandoClicar = () => {
        Alert.alert('Enviado!', `Email: ${email}\nSenha: ${password}`)
        setEmail('')
        setPassword('')
    }

    return(
        <View style={styles.container}>
                <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe seu email'
                placeholderTextColor="#888"
                value={email}
                onChangeText={(e) => setEmail(e.toLowerCase())}//evento que altera valor do email, e passando para lowercase (tudo minúsculo)
                keyboardType="email-address"
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe sua senha'
                placeholderTextColor="#888"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Pressable style={styles.botao} onPress={quandoClicar}>
                <Text style={styles.textoBotao}>Clique para enviar</Text>
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
    label:{
        fontSize: 16,
        paddingTop: 12,
    },
    input:{
        height: 40,
        fontSize: 16,
        width: '80%',
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderRadius: 8,
        margin: 8,
    },
    botao:{
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 12,
    },
    textoBotao:{
        fontSize: 16,
        color: 'white',
    },
})