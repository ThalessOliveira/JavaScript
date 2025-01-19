import Pagina from "@/components/template/Pagina";
import Image from "next/image";

export default function Home() {
  return (
    <Pagina>
        <div>Início</div>
        <button className="botao vermelho">Salvar</button>
    </Pagina>
  )
}
