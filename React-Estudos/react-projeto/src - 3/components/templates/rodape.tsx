export  default function Rodape(props: any){
    return(
        <footer className="flex justify-center bg-zinc-800 px-6 py-3">
            <span className="text-zinc-300 text-sm">
                Todos os direitos reservador &copy; { new Date().getFullYear()}
            </span>
        </footer>
    )
}