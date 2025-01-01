const promessaRejeitada = new Promise((resolve, reject) => {
    reject('Promessa rejeitada');
});

promessaRejeitada.catch((error) => console.log(error));
//promessa rejeitada --> catch