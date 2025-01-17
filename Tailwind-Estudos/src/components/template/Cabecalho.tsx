export interface CabecalhoProps {
    className?: string
}

export default function Cabecalho(props: CabecalhoProps){
    return <header className={`bg-green-500 ${props.className ?? ''}`}>Cabeçalho</header>
}