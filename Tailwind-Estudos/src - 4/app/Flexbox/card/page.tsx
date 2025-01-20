import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";
import Card from "@/components/flex/Card";

export default function PaginaCard(){
    return (
        <Pagina className="flex flex-col gap-7">
            <Titulo texto="Card com flexbox" descricao="Exemplo de uso prático do flexbox"/>
            <div>
                <Card/>
            </div>
        </Pagina>
    )
}