const verificarNota = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero >= 0 && numero <= 10){
            resolve('É uma nota válida');
        } else {
            reject('Algo deu errado com a nota')
        }
    });
};

verificarNota(7) //verificando nota 7
    .then((result) => console.log(result))
    //se retornar verdadeiro

    .catch((error) => console.error(error));
    //se retornar falso

    //console.error serve para mostrar erros
    //não é necessário