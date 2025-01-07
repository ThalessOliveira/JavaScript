import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho(props: any){
    return (

            <header className="flex justify-between items-center bg-zinc-700 p-6">
                <div className="flex items-center gap-2">
                    <IconBrandReact size={36} stroke={1} className="text-purple-600"/> 
                    <span className="font-black">React Essencial</span>
                </div>
                <div className="flex justify-center items-center bg-purple-600 p-3 rounded-full">USER</div>
            </header>

    )
} //<IconBrandReact/> -> npm install  @tabler/icons-react