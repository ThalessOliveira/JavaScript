import Botao from "@/components/Botao"
import Link from "next/link"

export default function Home() {
  return ( //<Botao /> -> new Botao()
    <div className="flex gap-2">
      <Link href={"/primeiro"}>Primeiro Componente</Link>
      <Link href={"/contador"}>Contador</Link>
    </div>
  )
}
