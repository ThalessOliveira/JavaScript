import { useState } from "react";

export default function useReserva(){
    const [reserva, alterarQuantia] = useState<number>(0);

    return {
        reserva,
        alterarQuantia,
    }
}