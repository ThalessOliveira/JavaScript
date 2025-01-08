import Pagina from "@/components/templates/pagina";
import FormAdicionarConta from "@/components/formularioAdicionar";

export default function Adicionar(){
    return(
        <Pagina>
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Adicionar Conta</h1>
        </div>
        <div>  
        <FormAdicionarConta/>  
        </div>    
        </Pagina>
    )

}