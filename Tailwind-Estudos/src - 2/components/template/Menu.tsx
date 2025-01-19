export interface MenuProps {
    className?: string
}

export default function Menu(props: MenuProps){
    return (
        <aside className={`${props.className ?? ''}`}> {/* passar uma interface com o classname e inputar esse codigo, faz com que conseguimos colocar um classname na pagina Pagina.tsx em <Menu /> */}
        {/* ${props.className ?? ''} passa o classname, se não, string vazia */}
            <nav>Menu</nav>
        </aside>
    )
}