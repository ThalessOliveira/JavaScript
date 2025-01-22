import Item from "@/src/components/item"
import { ScrollView} from "react-native"

export default function Rolagem(){
    return(
        <ScrollView>
            <Item principal="item 1" secundario="Descrição do Item 1"/>
            <Item principal="item 2" secundario="Descrição do Item 2"/>
            <Item principal="item 3" secundario="Descrição do Item 3"/>
            <Item principal="item 4" secundario="Descrição do Item 4"/>
            <Item principal="item 5" secundario="Descrição do Item 5"/>
            <Item principal="item 6" secundario="Descrição do Item 6"/>
            <Item principal="item 7" secundario="Descrição do Item 7"/>
            <Item principal="item 8" secundario="Descrição do Item 8"/>
        </ScrollView>
    )
}
