import Link from "next/link"
import MenuItem from "./menuItem"
import { IconHome2, IconClock, IconMoneybag, IconPigMoney, IconX, IconSum, IconVersions, IconAd, IconSumOff, IconSquare, Icon3dRotate, IconArrowAutofitContent, IconArrowBigUp } from "@tabler/icons-react"

export default function Menu(props: any){
    return (
        <aside className="bg-zinc-600 w-80 p-8">
            <nav className="flex flex-col gap-3">
                <MenuItem texto="Home" href="/" icone={<IconHome2/>}/>
                <MenuItem texto="Reserva" href="/reserva" icone={<IconPigMoney/>}/>
                <MenuItem texto="Adicionar Conta" href="/adicionarConta" icone={<IconMoneybag/>}/>
            </nav>
        </aside>
    )
}