export interface RodapeProps {
    className?: string
}

export default function Rodape(props: RodapeProps){
    return <footer className={`
        flex justify-end items-center px-7
        text-zinc-500 text-sm border-t
         ${props.className ?? ''}
         `}>
            <div className="flex items-center boxed">
                Todos os direitos reservador &copy; {new Date().getFullYear()}
            </div>
        </footer>
}