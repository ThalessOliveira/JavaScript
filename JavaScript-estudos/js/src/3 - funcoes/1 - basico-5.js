function somarTodos(...numeros){
    //... define que voce pode passar quantos parametros quiser
    let total = 0;

    for(let n of numeros){
    //percorre todos os elementos de numeros
        total += n;
    }
    return total;
}

console.log(somarTodos(1, 2, 3, 4, 5));
console.log(somarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));