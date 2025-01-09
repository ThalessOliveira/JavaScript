import Link from "next/link"
import MenuItem from "./menuItem"
import { IconArrowBarBoth, IconArrowMergeBoth, IconArrowRoundaboutRight, IconArrowsDiff, IconBrandProducthunt, IconError404, IconForms, IconHome2, IconLayout, IconLayout2, IconList, IconListCheck, IconNumber, IconNumber1, IconNumbers, IconUser, IconUserCircle } from "@tabler/icons-react"

export default function Menu(props: any){
    return (

                <aside className="bg-zinc-800 w-80 p-8">
                    <nav className="flex flex-col gap-3">
                        <MenuItem texto="Início" href="/" icone={<IconHome2/>}/>
                        <MenuItem texto="Layout" href="/layout" icone={<IconLayout2/>}/>
                        <MenuItem texto="Não Existe" href="/nao-existe" icone={<IconError404/>}/>
                        <MenuItem texto="Produtos" href="/formulario" icone={<IconList/>}/>
                        <MenuItem texto="Cliente Servidor" href="/formulario" icone={<IconArrowsDiff/>}/>
                        <MenuItem texto="Administração" href="/formulario" icone={<IconUserCircle/>}/>
                    </nav>
                </aside>

    )
}