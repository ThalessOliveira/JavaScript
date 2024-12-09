//Exemplo de app com for

let valor = 500;
let meses = 12;
let juros = 5;

for (let i = 1; i <= meses; i++){
    valor = valor + valor * juros / 100;
}

//valor + % de juros sobre o valor durante 12 meses

console.log(valor);