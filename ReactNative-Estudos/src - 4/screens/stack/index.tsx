import { createStackNavigator } from "@react-navigation/stack"
import Tela1 from "./Tela1"
import Tela2 from "./Tela2"
import Tela3 from "./Tela3"

export default function Pilha(){
//navegação em pilha

    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: true, //escondendo cabealho para todo o navegador (false)
            }}
        >
            <Stack.Screen name="Tela1" component={Tela1}/>
            <Stack.Screen name="Tela2" component={Tela2}/>
            <Stack.Screen 
            name="Tela3" 
            component={Tela3}
            options={{
                title: 'Última Tela',
                headerBackTitle: 'Voltar',
                headerShown: true,
            }}
            />
        </Stack.Navigator>
    )
} //é necessario declarar a tela no drawer