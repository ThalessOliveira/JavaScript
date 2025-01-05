function bomDia(): void{
    console.log('Bom dia!');
}
//aqui declaramos que essa é uma função sem retorno (void), porém não é necessário

bomDia();

//se declararmos o tipo da função, ela precisa de retorno (return)

function somar(a: number, b: number): number{
    return a + b;
}

const resultado = somar(10, 20);

console.log(resultado);