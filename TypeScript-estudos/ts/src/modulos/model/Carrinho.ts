import ItemCarrinho from "./itemCarrinho";
//com o export default, elimina o uso de { } na hora da importação, e nao e necessario usar o mesmo nome

export interface Carrinho {
    readonly itens?: ItemCarrinho[];
    //item aponta para a interface ItemCarrinho
    readonly cupom?: number;
    total: number;
    totalComDesconto: number;
}