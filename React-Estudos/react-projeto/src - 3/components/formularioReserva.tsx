'use client'
import useReserva from "@/app/hooks/useReserva"
import { useState } from "react"

export default function ReservaForm(){
    const {reserva, alterarQuantia} = useReserva()
    const [valor, setValor] = useState<number>(0)

    function reservar(){
        alterarQuantia(reserva + valor)
        setValor(0)
    }

    function zerarValor(){
        alterarQuantia(0)
    }


    return(
        <div className="flex flex-col gap-3">
            <input 
                type="number"
                placeholder="Quantia a reservar"
                size={80}
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
                className="bg-zinc-800 p-2 rounded outline-none"
            />
            <button onClick={reservar} className="bg-green-400 p-2 rounded-md w-48">Adicionar a Reserva</button>
            <button onClick={zerarValor} className="bg-green-400 p-2 rounded-md w-48">Zerar Valor</button>
            <strong>Quantia: {reserva}</strong>
        </div>
    )
}