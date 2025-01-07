'use client'
import useFormularioUsuario from "@/app/hooks/useFormularioUsuario"
import { useState } from "react"

export default function Formulario(){
    const {nome, alterarNome, email, alterarEmail, senha, alterarSenha} = useFormularioUsuario()//pegando os dados do hook

    function salvar(){
        console.log(nome);
        console.log(email);
        console.log(senha);
    }

    return(
        <div className="flex flex-col gap-3">
            <input
                type="text"
                placeholder="Nome"
                size={80}
                value={nome} //valor do input
                onChange={(e) => alterarNome(e.target.value)} //função de alterar valor
                className="bg-zinc-800 p-2 rounded outline-none"
            />
            <input 
                type="email" 
                placeholder="E-mail" 
                size={80}
                value={email}
                onChange={(e) => alterarEmail(e.target.value)}
                className="bg-zinc-800 p-2 rounded outline-none"
            />
            <input 
                type="password" 
                placeholder="Senha" 
                size={80}
                value={senha}
                onChange={(e) => alterarSenha(e.target.value)} 
                className="bg-zinc-800 p-2 rounded outline-none"
            />

            <button onClick={salvar} className="bg-green-500 p-2 rounded-md w-48">Salvar</button>

            <div className="flex gap-5">
                <span>{nome}</span>
                <span>{email}</span>
                <span>{senha}</span>
            </div>
        </div>
    )
}