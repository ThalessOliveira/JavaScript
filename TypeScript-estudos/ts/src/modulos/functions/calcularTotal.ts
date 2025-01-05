import { Carrinho } from "../model/Carrinho";
import ItemCarrinho from "../model/itemCarrinho";

export function calcularTotal(carrinho: Carrinho): Carrinho {
    const total = carrinho.itens?.reduce((total: number, item: ItemCarrinho) => {
        const totalItem = item.preco * item.quantidade;
        return total + totalItem;
    }, 0) || 0;

    return { ...carrinho, total };
}

export function calcularDesconto(carrinho: Carrinho): Carrinho {
    const desconto = carrinho.cupom ? carrinho.total * carrinho.cupom : 0;
    const totalComDesconto = (carrinho.total || 0) - desconto; 

    return {
        ...carrinho,
        totalComDesconto,
    };
}

