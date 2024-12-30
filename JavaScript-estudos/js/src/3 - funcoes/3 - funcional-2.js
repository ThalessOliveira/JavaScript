//Uma função pode retornar uma função

function retornarUmaFuncao() {
    return function () {
        console.log('Olá, mundo!');
    };
}

const souUmaFuncao = retornarUmaFuncao();

souUmaFuncao();

retornarUmaFuncao()();