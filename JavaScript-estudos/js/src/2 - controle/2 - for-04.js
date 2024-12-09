//percorrendo esses elementos com for

const carrinho = [
    {nome: 'Camisa', quantidade: 2, preco: 50.0},
    {nome: 'Calça', quantidade: 1, preco: 120.0},
    {nome: 'Tênis', quantidade: 1, preco: 200.0},
    {nome: 'Boné', quantidade: 3, preco: 30.0}
]

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++){
    let item = carrinho[i];
    let subtotal = item.quantidade * item.preco;
    totalCompra += subtotal;
    console.log(`Item: ${item.nome} | Quantidade: ${item.quantidade} | Subtotal: ${subtotal.toFixed(2)}`)
}

console.log(`Valor total da compra: R$${totalCompra}`);