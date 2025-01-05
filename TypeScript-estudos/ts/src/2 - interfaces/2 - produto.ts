interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const produto1: Produto = {
    id: 1,
    nome: 'Smartphone',
    descricao: 'Um smartphone top de linha',
    preco: 2000,
    imagem: 'smartphone.jpg',
};

const produto2: Partial<Produto> = {
    id: 2,
    nome: 'Notebook',
    preco: 3000,
};
//aqui nesse exemplo, não precisamos fornecer todas as informações do produto, é um produto parcial
//Por exemplo, recebemos um produto e não temos todas as informações do produto

console.log(produto1);
console.log(produto2);