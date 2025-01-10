//utilizar (paginas) no nome da pasta, exclui a necessidade de colocar /paginas/... na URL
//porem deu erro, entao estou comentando (:

import ProdutoItem from "@/app/components/produto/ProdutoItem"
import obterProdutos from "@/app/data/service/obterProdutos"

export default async function PaginaProdutos(){
    const produtos = await obterProdutos() //chamamos a lista de produtos como uma função
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Lista de Produtos</h1>
            <div className="flex flex-col gap-5">
                {produtos.map((produto) => (
                    <ProdutoItem key={produto.id} produto={produto}/>
                ))}
            </div>
        </div>
    )

}