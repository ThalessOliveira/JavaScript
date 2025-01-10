'use client'
import { useState } from "react"
//template vai ser carregado a cada vez que acessar um pagina
//entao cada vez que voce acessar uma pagina ele vai ser atualizado
//para observar nesse exemplo, é so navegar pelas paginas mae e filha, e ver a hora
//no layout a hora vai ficar parada no momento em que acessou
//no template cada vez que navegar or uma pagina a hora sera atualizada
export default function Template(props: any){
    const [data] = useState(new Date())

    return(
        <div className="border-8 border-green-500 p-8">
            <span>{data.toLocaleTimeString()}</span>
            <main>{props.children}</main>
        </div>
    )
}
