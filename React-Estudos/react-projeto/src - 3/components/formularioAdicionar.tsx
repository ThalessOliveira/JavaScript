'use client'
import { useState } from "react";

export default function FormAdicionarConta() {

    const [htmlConta, setHtmlGerado] = useState<React.ReactNode | null>(null);

    const [conta, setConta] = useState<string>("");

    const [valor, setValor] = useState<number>(0);


    function AdicionarConta() {
        setHtmlGerado(
            <div className="flex flex-col border-2 border-purple-500 rounded-full items-center justify-center p-5">
                <h1 className="text-lg font-bold">Conta: {conta}</h1>
                <h1 className="text-lg font-bold">Valor: {valor}</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Nome da conta"
                size={80}
                value={conta}
                onChange={(e) => setConta(e.target.value)}
                className="bg-zinc-800 p-2 rounded outline-none"
            />
            <input
                type="number"
                placeholder="Valor"
                size={80}
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
                className="bg-zinc-800 p-2 rounded outline-none"
            />
            <button
                onClick={AdicionarConta}
                className="bg-green-400 p-2 rounded-md w-48"
            >
                Adicionar a Conta
            </button>
            {htmlConta}
        </div>
    );
}
