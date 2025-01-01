const frutas = ['maçã', 'banana', 'laranja', 'tomate'];
const vegetais = ['cenoura', 'tomate', 'batata'];

const comida = frutas.concat(vegetais);
//concatenamos um array com o outro, juntamos os dois
//gerando o array comida
console.log(comida);

const index = comida.indexOf('tomate');
//vai encontrar o indice de 'tomate' e armazenar na constante index
if (index !== -1){
    // se o index for diferente de -1
    comida.splice(index, 1);
    //a função splice precisa de dois parametros
    //onde começa, no caso em index, que é o valor do indice tomate
    //e  quantos elementos ele vai excluir a partir de index, no caso, 1, somente o 'tomate'
}

console.log(comida);

//se quisermos organizar os elementos em ordem alfabetica, usamos sort

comida.sort();
console.log(comida);

//se quisermos saber o tipo de algo
console.log(typeof 123);
console.log(typeof 'texto');
console.log(typeof comida);