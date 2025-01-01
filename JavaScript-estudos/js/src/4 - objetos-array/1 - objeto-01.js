//ao inves de criar uma classe e colocar os construtores, podemos criar objetos

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Catanduva'
};
//criando instancia do objeto com chaves e valores

//aqui criamos um array para ser acessado via nome, não indices (como um objeto)

//array -> estrutura indexada, com indices

console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Cidade: ${pessoa.cidade}`);

//pessoa = {
//    nome: 'Pedro',
//    idade: 30,
//    cidade: 'São Paulo'
//};
//não podemos fazer isso, pois estamos atriundo um novo objeto a uma constante

delete pessoa.cidade;
//aqui deletamos o atributo pessoa.cidade

pessoa.nome = `Maria`;
//aqui ja conseuimos, pois estamos atribuindo novos valores ao indice pessoa.nome
console.log(`Nome: ${pessoa.nome}`);
console.log(pessoa)

//para deixar os dados dentro do objeto impossibilitados de se modificar, usamos a função:

// ----> Object.freeze
const carro = Object.freeze({
    nome: 'Hilux',
    marca: 'Toyota',
    ano: '2025'
})

carro.nome = 'Corolla';

carro.placa = 'AAA-0000'
//também não conseguimos adicionar um novo atributo

console.log(carro);