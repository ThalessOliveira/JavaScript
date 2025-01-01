function esperarPor(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000)
    });
}

//aqui temos uma função no qual você passa o parametro de segundos, quantos segundos deseja para esperar

async function executar(){
    console.log('Início');

    await esperarPor(2);
    console.log('Depois de 2 segundos');

    await esperarPor(2);
    console.log('Depois de 3 segundos');

    await esperarPor(2);
    console.log('Depois de 5 segundos');

    console.log('Fim');
}
//aqui é uma função async que segue o fluxo com o await, esperando o tempo determinado
//uma função que chama a outra

executar();