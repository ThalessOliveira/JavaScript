//array uma lista ordenada de dados

//aceitam repetições
//pode colocar oque quiser dentro, dados, objetos e até funções

const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas);
//criando array

console.log(frutas[1]); //acessando pelo índice
console.log(frutas.length);//função para ver o tamanho do array

frutas.push('uva') //adicionar um novo elemento ao array com a função push

console.log('pop:', frutas.pop()); //pop remove o ultimo elemento do array e mostra
//como uma pilha, o primeiro de cima sai
console.log(frutas);

frutas.unshift('manga'); //unshift faz com que o elemento seja adicionado no primeiro indice do array: [0]
console.log('unshift:', frutas);

console.log('shift:', frutas.shift()); //remove o primeiro elemento do array e mostra
//como uma fila, o primeiro que entrou e o primeiro que sai
console.log(frutas);


