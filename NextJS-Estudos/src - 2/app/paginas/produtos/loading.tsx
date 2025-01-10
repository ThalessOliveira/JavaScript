import Carregando from "@/app/components/shared/Carregando";
//loading.tsx é onde ficam as telas de carregamento
export default function PaginaCarregando(){
    return <Carregando quantidade={3} /> //aqui retornamos o componente Carregando
    //O conteudo que colocamos no componente ira aparecer aqui nessa tela de carregamento
}