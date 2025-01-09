import Link from "next/link";

export default function PaginaComLayout(){
    return(
        <div className="flex flex-col justify-center items-center text-2xl gap-7">
            <h1>Conteúdo da página RAIZ</h1>
            <Link href="/layout/filha" className="botao">Ir para a página FILHA</Link>
        </div>
    )
}