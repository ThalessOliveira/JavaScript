const bomDia = function (){
    return 'Bom Dia!'
}

const lista = [bomDia, 2, 'texto', {nome: 'João'}, true]

console.group(lista.length)

console.log(lista[0]())