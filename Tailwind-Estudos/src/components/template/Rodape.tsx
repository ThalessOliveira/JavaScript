export interface RodapeProps {
    className?: string
}

export default function Rodape(props: RodapeProps){
    return <footer className={`bg-blue-500 ${props.className ?? ''}`}>Rodapé</footer>
}