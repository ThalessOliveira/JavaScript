import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Menu from "./Menu"

interface PaginaProps{
    children?: ReactNode
}

export default function Pagina(props: PaginaProps){
    return (
        <div className="flex flex-col min-h-screen"> {/* min-h-screen ocupar a altura da tela */}
            <Cabecalho  className="h-20"/>
            <div className="flex-1 flex"> {/* flex-1 para aplicar e usar a altura da tela */}
                <Menu className="w-96"/> {/* muda a largura do menu*/}
                <main className="bg-red-500 flex-1">{props.children}</main>
            </div>
            <Rodape className="h-14"/>
        </div>
    )
}