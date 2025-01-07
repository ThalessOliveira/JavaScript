'use client' //nextjs

import { useState } from "react"

interface ContadorProps {
    valorInicial?: number
}

export default function Contador(props: ContadorProps){

    //useState, modificar alem do console, modificar graficamente:
    //import { useState } from "react"

    const [numero, alterarNumero] = useState(props.valorInicial ?? 0)
    //retorna um numero, e a função que atera o numero (array)


    function decrementar (){
        alterarNumero(numero - 1)
    }

    function incrementar (){
        alterarNumero(numero + 1)
    }

    return (
        <div>
            <h1>Contador</h1>

            <span>{numero}</span>

            <div className="flex gap-2">

                <button onClick={decrementar} className="bg-red-500 p-2">Decrementar</button>

                <button onClick={incrementar} className="bg-green-600 p-2">Incrementar</button>

            </div>

        </div>
    )
}