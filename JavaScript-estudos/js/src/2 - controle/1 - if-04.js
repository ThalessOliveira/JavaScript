//Vamos uma pratica de IF

let treino = true
let alimentacao = true

if (treino && alimentacao){
    console.log('Você cresceu, treino e alimentação');
}

if (!treino && alimentacao){
    console.log('Não cresceu, só alimentação ');
}

if (treino && !alimentacao){
    console.log('Não cresceu, só treino');
}

if (!treino && !alimentacao){
    console.log('Não fez nada');
}