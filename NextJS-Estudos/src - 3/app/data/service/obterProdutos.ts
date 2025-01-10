'use server' //'use server' diz que é uma ação que vai rodar no servidor
import produtos from "../constantes/produtos"
import { esperar } from "./utils"

export default async function obterProdutos() { //server action -> função assincrona (obrigatoriamente)
    await esperar(3000)
    return produtos
} //função que vai obter os produtos