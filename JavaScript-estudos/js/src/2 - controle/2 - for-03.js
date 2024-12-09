//Usando for, arrays e objetos

//ARRAY -> estrutura indexada
//para cada elemento é atribuido um índice
//começa em 0

const nomes = ['Thales', 'Felipe', 'Otavio', 'Ricardo'];
const idades = [18, 16, 17, 17]

//criamos listas de nomes e listas de idades

console.log(nomes);
console.log(idades);


//instanciando um objeto em javascript
const pessoa = { nome: 'Thales', idade: 18 };
console.log('Objeto:',pessoa);

//lista de objetos

const pessoas = [
    {nome: 'Thales', idade: 18},
    {nome: 'Felipe', idade: 16},
    {nome: 'Otavio', idade: 17},
    {nome: 'Ricardo', idade: 17}
]

//listar a quantidade de elementos do array

console.log(pessoas.length);

//vamos pegar o indice do array que quisermos

console.log(pessoas[0]);
console.log(pessoas[1]);
console.log(pessoas[2]);
console.log(pessoas[3]);

//percorrendo esses elementos com for
//vamos criar uma lista de objetos carrinho

const carrinho = [
    {nome: 'Camisa', quantidade: 2, preco: 50.0},
    {nome: 'Calça', quantidade: 1, preco: 120.0},
    {nome: 'Tênis', quantidade: 1, preco: 200.0},
    {nome: 'Boné', quantidade: 3, preco: 30.0}
]

let totalCompra = 0;

//carrinho.lenght -> quantidade de itens na constante carrinho, no caso 4

for (let i = 0; i < carrinho.length; i++){
    // para i de 0 ate 4, incremento de i
    let item = carrinho[i];
    //item = indice do carrinho
    let subtotal = item.quantidade * item.preco;
    //nessa parte, selecionamos oque queremos do array  de item e fazemos a lógica
    totalCompra += subtotal;
    //totalCompra = totalCompra + subtotal
    console.log(`Item: ${item.nome} | Quantidade: ${item.quantidade} | Subtotal: ${subtotal.toFixed(2)}`)
    //toFixed(numero), serve para exibir quantas casas decimais quiser
}

console.log(`Valor total da compra: R$${totalCompra}`);
