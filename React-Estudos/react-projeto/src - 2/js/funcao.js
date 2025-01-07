//função construtora
function Botao(props){ //props -> propiedades
    this.label = props?.label ?? 'OK' //props  não precisa existir, se não tiver props, então 'OK'
    //criando um label
}

//instanciando a função botão
const botao1 = new Botao({ label: 'Salvar'})
console.log(botao1.label)

const botao2 = new Botao({ label: 'Cancelar'})
console.log(botao2.label)

const botao3 = new Botao()
console.log(botao3.label)