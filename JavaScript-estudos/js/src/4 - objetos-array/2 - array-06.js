//função filter
//filtrar elementos dentro de um array

const produtos = [
    {nome: 'Camisa' , preco: 50 },
    {nome: 'Calça' , preco: 120 },
    {nome: 'Tênis' , preco: 200 },
    {nome: 'Boné' , preco: 30},
    {nome: 'Relógio' , preco: 80 },
];

const maisBaratos = produtos.filter((produto) => produto.preco < 100);
//vai verificar se o preço e menor que 100

console.log('Produtos com preço menor que 100 reais: ');
console.log(maisBaratos);