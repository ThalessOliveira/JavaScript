//temos um array com numeros, e vamos passar uma função para calcular o triplo deles e armazenar em outro array com os triplos

function triplo(n){
    return n * 3
}

const numeros = [1, 2, 3, 4];

const triplos = [];

//fazendo manualmente:

for (const numero of numeros){
    triplos.push(triplo(numero))
    //percorremos com for cada elemento do array
    //inserimos dentro do array triplos com push
    //o valor triplicado
}

console.log(triplos);//essa foi a forma manual

//agora com a função map

function dobro (num){
    return num * 2
}

const numerosDobros = [2, 4, 6, 8];

const dobros = numerosDobros.map(dobro);
//map percorre cada elemento do array e executa a função, por ultimo armazena em dobros

console.log(dobros)

//podemos adicionar mais de um map em sequencia

