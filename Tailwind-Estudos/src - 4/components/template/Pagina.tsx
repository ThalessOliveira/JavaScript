import { ReactNode } from "react"
import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Menu from "./Menu"
//https://dribbble.com/ site para ver páginas de sites como inspiração
interface PaginaProps{
    children?: ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps){
    return (
        <div className="flex flex-col min-h-screen px-7 lg:px-0"> {/* min-h-screen ocupar a altura da tela */}
            <Cabecalho  className="h-20"/>
            <div className="flex-1 flex boxed"> {/* flex-1 para aplicar e usar a altura da tela */}
                <Menu className="hidden lg:block lg:w-64 xl:w-72 py-7"/> {/* muda a largura do menu*/}
                {/* para responsividade -> pesquisar: tailwind breakpoints */}
                <main className={`
                    flex-1 py-7
                    ${props.className ?? ''}
                    `}>
                {props.children}
                </main>
            </div>
            <Rodape className="h-14"/>
        </div>
    )
}