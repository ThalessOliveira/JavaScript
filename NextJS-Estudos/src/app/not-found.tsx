import Image from 'next/image'
import dinoGoogle from '@/app/assets/dinoGoogle.webp'
import Link from 'next/link'

export default function(){
    return(
        <div className="h-screen flex flex-col justify-center items-center gap-7 text-center">
            <h1 className="text-3xl text-zinc-400 font-bold">404 - Página não encontrada!</h1>
            <Image src={dinoGoogle} alt="Erro 404" width={300} height={300} />

            <p className="text-lg max-w-[600px]">Você pode ter perdido o caminho...</p>

            <Link href="/" className="bg-purple-600 py-2 px-4 rounded-md">Voltar</Link>
        </div>
    )
}