import Produto from "../model/Produto";
//vamos criar uma constante para simular banco de dados

//aqui estão os itens
const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Smartphone X Pro',
        preco: 2000,
        descricao: 
            'Descubra o poder do Smartphone X Pro, projetado para o alto desempenho',
        imagemUrl: 
            'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        nome: 'Notebook UltraPro 15',
        preco: 3000,
        descricao:
            'O notebook UltraPro 15 é a escolha ideal para quem busca uma experiencia unica e de alto desempenho.',
        imagemUrl:
            'https://images.unsplash.com/1/macbook-air-all-faded-and-stuff.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        nome: 'Tabled MaxTab 10',
        preco: 1500,
        descricao:
            'O Tablet MaxTab 10 oferece a combinação perfeita de leveza e desempenho com um baixo custo.',
        imagemUrl:
            'https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export default produtos