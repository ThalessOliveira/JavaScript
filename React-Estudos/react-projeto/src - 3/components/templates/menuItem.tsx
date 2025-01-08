import Link from "next/link"

interface MenuItemProps{
    icone?: any
    texto: string
    href: string
}

export default function MenuItem(props: MenuItemProps){
    return(
        <div className="flex items-center gap-1 pt-3 pb-3 hover:bg-black/20">
            {props.icone}
            <Link href={props.href}>{props.texto}</Link>
        </div>
    )
}