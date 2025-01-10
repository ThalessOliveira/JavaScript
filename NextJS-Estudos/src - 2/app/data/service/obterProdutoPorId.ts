'use server' //roda do lado do servidor
import { esperar } from "./utils"
import produtos from "../constantes/produtos"

export default async function obterProdutosPorId(id: number){
    await esperar(3000) //esperar alguns segundos para ver a tela de carregamento
    const produto = produtos.find((produto) => produto.id === id) //procura os dados de produto, e pega o produto pelo ID
    return produto
}