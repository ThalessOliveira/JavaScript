//colocar as variaveis dentro das strings

// `${variavel}`

//jeito padrao:

// const frase = 'Olá! Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + ' .'; 


//interpolação:

const nome = 'Thales';
const idade = '18';
const cidade = 'Catanduva';

const frase = `Olá! Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`

console.log(frase);