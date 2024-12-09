//lista de objetos

const pedidos = [
    {id: 1, status: 'pendente'},
    {id: 2, status: 'enviado'},
    {id: 3, status: 'entregue'},
    {id: 4, status: 'cancelado'},
    {id: 5, status: 'pendente'}
]

//mostrando os itens do pedido com for
//forma simplificada (parecida com o foreach)

for (const pedido of pedidos){

//usando if else para verificar e mostrar status

    if (pedido.status === 'pendente'){
        console.log(`Pedido ${pedido.id}: Aguardando pagamento`)
    } else if (pedido.status === 'enviado'){
        console.log(`Pedido ${pedido.id}: Pedido enviado`)
    } else if (pedido.status === 'entregue'){
        console.log(`Pedido ${pedido.id}: Entregue`)
    } else if (pedido.status === 'cancelado'){
        console.log(`Pedido ${pedido.id}: Cancelado`)
    }
}