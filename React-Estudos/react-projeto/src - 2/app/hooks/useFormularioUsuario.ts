import { useState } from "react";

//hooks servem para armazenar controles de dados e gestao de estado
export default function useFormularioUsuario(){
    const [nome, alterarNome] = useState('')
    const [email, alterarEmail] = useState('')
    const [senha, alterarSenha] = useState('')

    return {
        nome,
        alterarNome,
        email,
        alterarEmail,
        senha,
        alterarSenha,
    }

}