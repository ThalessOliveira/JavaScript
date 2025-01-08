import Pagina from "@/components/templates/pagina"
import ReservaForm from "@/components/formularioReserva"

export default function Reserva(){
    return (
        <Pagina>
            <div>
                <h1 className="text-2xl font-bold">Reserva</h1>
                <ReservaForm/>
            </div>
            
        </Pagina>
    )
}