'use client' //use client -> faz com que as coisas do console apareçam do meu lado, não do servidor

import Cabecalho from "./cabecalho"
import Menu from "./menu"
import Rodape from "./rodape"

export default function Pagina(props: any){
    console.log(props.children)
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho/>
            <div className="flex-1 flex">
                <Menu/>
                <main className="p-8">{props.children}</main>
            </div>
            <Rodape/>
        </div>
    )  //<main>{props.children}</main> faz com que os elementos da pagina page.tsx sejam passados como propiedade e sejam exibidos
} 