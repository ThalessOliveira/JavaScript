import Cliente from "@/app/components/cliente-servidor/Cliente";
import Servidor from "@/app/components/cliente-servidor/Servidor";

export default function PaginaClienteServidor(){
    return (
        <div className="flex flex-col gap-10">
            <div>
                <h1>Componente Client</h1>
                <Cliente />
            </div>
            <div>
                <h1>Componente Server</h1>
                <Servidor/>
            </div>
        </div>
    )
}
//o que é parte do usuario, o usuario consegue alterar
//o que é parte do servidor, o usuario nao consegue alterar