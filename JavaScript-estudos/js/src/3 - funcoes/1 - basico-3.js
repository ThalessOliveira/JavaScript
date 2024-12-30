function maiorNumero(a, b){
    return a > b ? a : b;
    // if ternário
    // a > b = se true > return a
    //senao b
}

console.log(maiorNumero(10, 20));

function parOuImpar(numero){
    return numero % 2 === 0 ? 'Par' : 'Impar';
    //se numero mod 2  resto = 0
    //-> par
    //senao impar
}

console.log(parOuImpar(7));
console.log(parOuImpar(8));
