'use client' //nextjs

import { useState } from "react"

export default function Contador(){

    //useState, modificar alem do console, modificar graficamente:
    //import { useState } from "react"

    const estado = useState(0)
    //retorna um numero, e a funão que atera o numero (array)
    const numero = estado[0]
    const alterarNumero= estado[1]

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