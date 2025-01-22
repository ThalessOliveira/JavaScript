import { createDrawerNavigator } from '@react-navigation/drawer'//importando drawer navigator
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Inicio from './inicio';
import Texto from './texto';

export default function App(){ 

    //criando navegação com o Drawer
    const Drawer = createDrawerNavigator()

    function tela(props: {nome: string; icone: string; titulo: string; componente: any}) {
        return (
            
            <Drawer.Screen
                name={props.nome}
                component={props.componente}
                options={{
                    drawerIcon: ({ focused }: any) => (
                        <Ionicons
                            name={props.icone as any}
                            size={24}
                            color={focused ? '#1C80FF' : '#000'}
                        />
                    ),
                    drawerLabel: props.titulo,
                    title: props.titulo,
                }}
            />
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                {tela({
                    nome: 'Início',
                    icone: 'home-outline',
                    titulo: 'Início',
                    componente: Inicio,
                })}
                {tela({
                    nome: 'Texto',
                    icone: 'text',
                    titulo: 'Texto',
                    componente: Texto,
                })}
            </Drawer.Navigator>
        </NavigationContainer>
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
