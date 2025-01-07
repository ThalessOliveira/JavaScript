import Botao from "@/components/Botao"
import Pagina from "@/components/template/pagina" //depois de criar um componente página, é so inserir em todas

export default function PrimeiraPagina(){
    
  return ( //<Botao /> -> new Botao()
    <Pagina>
          <div className="flex gap-2">
            
            <Botao label="Salvar"/>
            <Botao label="Cancelar"/>
      
          </div>
    </Pagina>

  )
}