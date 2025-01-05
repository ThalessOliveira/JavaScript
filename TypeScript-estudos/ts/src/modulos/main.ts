//criando carrinho
import { calcularDesconto } from "./functions/calcularTotal";
import removerItensZerados from "./functions/removerItensZerados";
import { Carrinho } from "./model/Carrinho"

import { calcularTotal } from "./functions/calcularTotal";

const carrinhoOriginal: Carrinho = {
    itens: [
        {nome: 'Caneta', preco: 1.5, quantidade: 2 },
        {nome: 'Caderno', preco: 10, quantidade: 1 },
        {nome: 'Borracha', preco: 0.5, quantidade: 3 },
        {nome: 'Estojo', preco: 5, quantidade: 0 },
    ],
    cupom: 0.1,
    total: 0,
    totalComDesconto: 0,
};

const carrinhoSemItensZerados = removerItensZerados(carrinhoOriginal);
const carrinhoComTotal = calcularTotal(carrinhoSemItensZerados);
const carrinhoComDesconto = calcularDesconto(carrinhoComTotal)

console.log(carrinhoOriginal);
console.log(carrinhoSemItensZerados);
console.log(carrinhoComDesconto);

//este foi o projetinho, com as ligações entre arquivos e utilizando o que foi aprendido