//em layout.tsx vai envolver qualquer componente que esteja dentro da pasta
//é um template especifico que pode-se fazer para cada pagina
'use client'

import { useState } from "react"
import Pagina from "../components/template/pagina"
export default function Layout(props: any){
    const [data] = useState(new Date())

    return(
            <Pagina>
                <div className="flex flex-col border-8 border-red-500 p-8 w-full h-full">
                    <span>{data.toLocaleTimeString()}</span>
                    <main>{props.children}</main>
                </div>
            </Pagina>
    )//{props.children} faz com que tudo que esta dentro do componente seja os filhos
}