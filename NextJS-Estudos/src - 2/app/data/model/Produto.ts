export default interface Produto{
    id: number
    nome: string
    descricao: string
    preco: number
    imagemUrl: string //vamos acessar imagens fora da aplicação -> next.config.mjs
}

//aqui criamos uma interface de produtos (data/model/Produto.ts)
//para simular um produto do banco