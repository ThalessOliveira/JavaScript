import { IconBrandReact, IconUser, IconZoomMoney } from "@tabler/icons-react";

export default function Cabecalho(props: any){
    return (
        <header className="flex justify-between bg-zinc-800 p-6 items-center">
            <div className="flex items-center gap-3">
                <IconZoomMoney size={36}/>
                <span className="font-black">Gestão de contas</span>
            </div>
            <div>
                <div className="flex justify-center items-center bg-purple-500 p-3 rounded-full">
                    <IconUser size={26}/>
                    <span className="font-black">Usuario</span>
                </div>
            </div>
        </header>
    );
}