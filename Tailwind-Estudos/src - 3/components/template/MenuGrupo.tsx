export interface MenuGrupoProps {
    label: string
    children?: React.ReactNode //ReactNode é um tipo de dado que representa qualquer saída que um componente React pode retornar
    className?: string
}

export default function MenuGrupo (props: MenuGrupoProps){
    return(
        <div 
            className={`
                flex flex-col gap-2
                ${props.className ?? ''}
        `}> 
            <span className="text-white font-semibold">{props.label}</span> 
            <div>{props.children}</div>
        </div>
    )
}