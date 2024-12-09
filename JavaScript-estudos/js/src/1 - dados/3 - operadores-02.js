//operadores relacionais (sempre retornam um boolean)

//usando valores literais
console.log(10 > 5); //true
console.log(10 < 5); //false
console.log(10 >= 5); //true
console.log(10 <= 5); //false
console.log(10 == 5); //comparação (igual a), false
console.log(10 != 5); //diferente de, true
console.log(10 == '10'); //iguais, true, mas não em tipos de variaveis
console.log(10 === '10');// false, compara os valores e o tipo, false, os tipos são diferentes

//usando variáveis

let x = 10;
let y = 5;

console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false
console.log(x == y); //false
console.log(x != y); // true
console.log(x == '10'); //true
console.log(x === '10'); //false

//outro exemplo

let a = 10;
//compara conteudo
console.log(a != '10'); //retorna falso, o conteudo e o mesmo

//compara conteudo e tipo
console.log(a !== '10'); //retorna true, o conteudo e o mesmo, mas o tipo diferente