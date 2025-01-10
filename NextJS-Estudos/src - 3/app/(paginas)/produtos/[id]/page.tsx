//aqui em [id] vamos colocar a pagina que é passada quando clicamos em um produto
//exemplo: /produto/3

import obterProdutosPorId from "@/app/data/service/obterProdutoPorId"
import ProdutoDetalhes from "@/app/components/produto/ProdutoDetalhes"
import Link from "next/link"

export default async function PaginaProdutoPorId(props: any){ //esse componente roda do lado do servidor
    const produto = await obterProdutosPorId(+props.params.id) //pega o id em tipo number -> +props.params.id
    console.log(props)//console log exibe do lado do servidor, no caso aqui o cmd, não no browser

    if(!produto) return <div>Produto não encontrado</div>

    return (
        <div className="flex flex-col gap-5">
            <ProdutoDetalhes produto={produto}/>
            <Link href="/produtos" className="self-center bg-purple-500 p-2 rounded-md">
                Voltar
            </Link>
        </div>
    )
}