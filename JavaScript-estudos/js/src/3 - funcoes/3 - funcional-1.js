function executarTudo(...funcoes){
    for (let funcao of funcoes){
        funcao();
    }
    //vai percorrer cada funcao de funcoes e executar
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Boa Tarde!');
const boaNoite = () => console.log('Boa Noite!');
//criamos 3 funções arrow

executarTudo(bomDia, boaTarde, boaNoite);
//passamos como parametros outras funções
