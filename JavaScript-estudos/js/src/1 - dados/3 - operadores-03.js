//Operadores lógicos

// AND - &&

const alimentacao = true
const treino = true

const hipertrofia = alimentacao && treino;

console.log('Cresceu:', hipertrofia);

// OR - ||

const estudei = false;
const liUmLivro = true;

const diaProdutivo = estudei || liUmLivro;

console.log('Foi um dia produtivo?', diaProdutivo);

// NOT - !variavel

const cansado = true;
console.log('Academia hoje?', !cansado);

//XOR - or exclusivo

const usandoBone = true
const usandoChapeu = true

//voce nao pode usar chapeu e bone ao mesmo tempo

// XOR so retorna true se um for verdadeiro e o outro falso
const vestimenta = usandoBone !== usandoChapeu;
console.log('Estou vestido certo?', vestimenta);