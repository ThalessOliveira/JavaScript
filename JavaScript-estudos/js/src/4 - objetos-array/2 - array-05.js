const pessoas = [
    { nomeCompleto: 'Lucas Silva' },
    { nomeCompleto: 'Ana Paula' },
    { nomeCompleto: 'Pedro Santos' },
    { nomeCompleto: 'Maria Olivera' },
];

// Queremos pegar somente o primeiro nome

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0]);
//percorremos o array pessoas, e separamos os nome dos espaços através do split, onde tiver o espaço ele vai dividir em dois indices, [0] - primeiro nome, [1] - sobrenome
//por fim armazena em primeirosNomes
//primeirosNomes é um array com somente os primeiros nome

console.log(primeirosNomes);