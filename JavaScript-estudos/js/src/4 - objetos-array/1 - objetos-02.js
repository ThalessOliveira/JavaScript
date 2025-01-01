const livro = {
    titulo: 'O Senhor dos Anéis',
    autor: {
        nome: 'J.R.R. Tolkien',
        idade: 81,
    },
    generos: ['Fantasia', 'Aventura', 'Ficção'],
    publicado: true,
    anoPublicacao: 1954,
    generoPrincipal: function(){
        return this.generos[0];
    }
    //    generoPrincipal: function(){
    //    return this.generos[0];
    //}
    //o genero principal é uma função que retorna o primeiro indice de generos
    //acessar os dados internos do objeto -> this
};

//um objeto pode ter outro objeto dentro
//um objeto pode ter um array dentro

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor.nome}`);
console.log(`Publicado: ${livro.publicado ? 'Sim' : 'Não'}`);

if (livro.publicado){
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
    console.log(`Gêneros: ${livro.generos.join(', ')}`);
    //livro.generos.join(', ') pega todos os elementos do array e separa por vírgula
}

console.log(JSON.stringify(livro));//sem formatação

console.log(JSON.stringify(livro, null, 4));//JSON formatado

//a função JSON.stringfy, pega os elementos do objetos e transforma em valor textual em JSON

console.log(`Gênero Principal: ${livro.generoPrincipal()}`);
//na hora de chamar genero principal, chamamos como função()