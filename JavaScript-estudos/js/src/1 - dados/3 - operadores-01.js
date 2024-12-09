//Operadores aritméticos

//Usando valores literais (10 e 5 por exemplo)

console.log(10 + 5); //soma
console.log(10 - 5); //subtração
console.log(10 * 5); //multiplicação
console.log(10 / 5); //divisão
console.log(10 % 5); //mod (resto da divisao) 

// Usando variáveis (x e y)

let x = 10;
let y = 5;

console.log(x + y); //soma
console.log(x - y); //subtração
console.log(x * y); //multiplicação
console.log(x / y); //divisão
console.log(x % y); //mod (resto da divisao) 


//exemplo de mod
let a = 13;
let b = 2;

console.log(a % b); // <- resultado = 1

//incremento e decremento

let z = 10;

console.log(z++); //z = z + 1
//vai mostrar 10, porque p z++ veio depois do console.log
console.log(z); //agora mostra 11
console.log(++z); //z = z + 1, porem incrementa primeiro
console.log(z);


console.log(z--); //z = z - 1
console.log(--z); //z = z - 1, porem decrementa primeiro
console.log(z);


// +=

let c = 10;

c += 5 //c = c + 5
//atribuimos e adicionamos 5
console.log(c);

// -=

let d = 10;

d -= 5 //c = c - 5
//atribuimos e subtraimos 5
console.log(c);

//isso serve para qualquer operador aritmetico:
// +=, -+, *=, /= ...
