const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!');
});

console.log('Antes da promessa');
promessaSimples.then((resultado) => console.log(resultado));
//promessa resolvida --> then
console.log('Depois da promessa');

//aqui temos uma promessa, algo pendente a ser resolvido, prometendo responder algo, pode ser uma requisição para o servidor que irá retornar algo
//isso é um exemplo de assincronismo, no qual, quando executamos:

//Antes da promessa
//Depois da promessa
//Promessa resolvida!

//a execução continua enquanto a promessa deve ser resolvida, temos dois fluxos assíncronos