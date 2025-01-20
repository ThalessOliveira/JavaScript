import { IconShoppingCart, IconStarFilled } from "@tabler/icons-react"
import Image from "next/image"

export default function Card(){
    return(
        <div className="flex flex-col gap-4 bg-zinc-800 w-96 p-4 rounded-md">
            <div className="w-full h-72 relative">
                <div className="absolute z-50 px-4 py-0.5 top-2 left-2 bg-black rounded-full text-sm">20% off</div>
                <Image src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519"
                alt="Iphone 16 Pro Max"
                className="rounded-md object-cover" //object cover faz a imagem não distorcer
                fill
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-lg">Iphone 16 Pro Max</div>
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-bold text-xl">R$ 9999,99</span>
                        <span className="line-through text-sm text-zinc-400">R$ 12999,99</span>
                    </div>
                    <div className="display flex gap-0.5 items-center">
                        <IconStarFilled size={18} className="text-yellow-400"/>
                        <IconStarFilled size={18} className="text-yellow-400"/>
                        <IconStarFilled size={18} className="text-yellow-400"/>
                        <IconStarFilled size={18} className="text-yellow-400"/>
                        <IconStarFilled size={18} className="text-yellow-400"/>
                        <div className="bg-yellow-200 text-black mx-1 px-1 font-bold">5.0</div>
                    </div>
                </div>
                <button className="flex items-center justify-center gap-2 botao">
                    <IconShoppingCart size={23}/>
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    )
}

//se a borda não estiver sendo removida, é por um problema na biblioteca que importou
//em tailwind.config.ts
//remova:
//  		borderRadius: {
//    lg: 'var(--radius)',
//    md: 'calc(var(--radius) - 2px)',
//    sm: 'calc(var(--radius) - 4px)'
//}