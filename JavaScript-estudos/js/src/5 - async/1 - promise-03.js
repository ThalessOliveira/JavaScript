const promessaComTimeout = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida após 2 segundos');
    }, 2000);
})

//aqui setamos um tempo para a promessa ser resolvida

console.log('Antes da promessa')

promessaComTimeout.then((result) => console.log(result));

console.log('Depois da promessa')