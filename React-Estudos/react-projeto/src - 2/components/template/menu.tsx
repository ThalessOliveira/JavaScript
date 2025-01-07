import Link from "next/link"
import MenuItem from "./menuItem"
import { IconForms, IconHome2, IconNumber, IconNumber1, IconNumbers } from "@tabler/icons-react"

export default function Menu(props: any){
    return (

                <aside className="bg-zinc-800 w-80 p-8">
                    <nav className="flex flex-col gap-3">
                        <MenuItem texto="Início" href="/" icone={<IconHome2/>}/>
                        <MenuItem texto="Primeiro Componente" href="/primeiro" icone={<IconNumber1/>}/>
                        <MenuItem texto="Componente com Estado" href="/contador" icone={<IconNumbers/>}/>
                        <MenuItem texto="Formulário" href="/formulario" icone={<IconForms/>}/>
                    </nav>
                </aside>

    )
}