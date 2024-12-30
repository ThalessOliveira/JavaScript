function contarVogais(texto){
    const vogais = 'aeiouAEIOU'
    //define uma string com as vogais
    let contador = 0
    for (const letra of texto){
    //o laço for  percorre as letras do texto
        if (vogais.includes(letra)){
        // se letra esta em vogais
        // esta incluido  em vogais
            contador++
        // contador + 1
        }
    }
    return contador;
}

console.log(contarVogais('javascript'));



//exemplo de includes

console.log('Thales'.includes('hal'))

//retornará true pois 'hal' esta incluido em 'Thales'

console.log('Thales'.includes('java'))

//retornará false pois 'java' não esta incluido em 'Thales', a string 'Thales' não possui 'java' em sua composição