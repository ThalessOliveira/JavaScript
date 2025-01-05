interface Especificacoes {
    marca: string,
    modelo: string,
    placaDeVideo: string,
    memoria: string,
    processador: string,
    armazenamento: string,
    [extra: string]: string | number | boolean,
    //o atriuto extra faz com que essa interface tenha mais atributos extras, que não foram declarados nessa interface
}
//exemplo:

let computador: Especificacoes = {
    marca: 'Dell',
    modelo: 'Inspiron 15 3000',
    placaDeVideo: 'Intel UHD Graphics 620',
    memoria: '8 GB',
    processador: 'Intel Core i5',
    armazenamento: 'SSD 256 GB',
    //aqui estao atributos extras:
    bluetooth: true,
    hdmi: true,
}

console.log(computador);
