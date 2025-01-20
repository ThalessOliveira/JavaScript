import { IconBrandTailwind } from "@tabler/icons-react";

export default function Logo(){
    return (
        <div className="flex gap-2 items-center">
            <IconBrandTailwind size={40} stroke={1}/>
            <div>
                <span className="font-black">Tailwind</span>
                <span>Estudos</span>
            </div>
        </div>
    )
}