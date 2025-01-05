//classe = molde
//objeto = resultado do molde

//super -> referenia a classe pai
//this -> classe atual

//export default, essa classe poderá ser importada em outros arquivos sem usar um nome especifico na importação
//abstract class serve como modelo ou base para outras classes

export default abstract class Carro{
    //aqui declaramos a classe
    //agora precisamos do construtor
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
        //a propiedade protected (protegida), são niveis de proteção, nem todo mundo pode ver essa informação
    ){}
    //get faz acessar a função como um atributo
    get velocidade(): number {
        return this.velocidadeAtual;
    }

    acelerar(): number {
        const novaVelocidade = this.velocidadeAtual + this.aceleracao;
        
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        //se a nova velocidade for menor ou igual a velocidade maxima, então novaVelocidade, se não velocidadeMaxima

        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        //se a novaVelocidade for maior ou igual a 0, então novaVelocidade, senão 0

        return this.velocidadeAtual;
    }
}


//aqui vamos criar o molde de um carro (class)
//extends -> herança, pega as caracteristicas de outra classe
class Hilux extends Carro{
    constructor(){
        super(228, 10, 5)
        //super -> passamos os atributos com base na classe carro
        //VelocidadeMaxima = 228
        //aceleracao = 10
        //frenagem = 5
    }
}

interface esportivo {
    ligarTurbo(): void;
    desligarTurbo(): void;
}

//Ferrari, herda a classe carro, e implementa a interface esporivo
class Ferrari extends Carro implements esportivo{
    private turbo = false;

    constructor(){
        super(350, 20, 15);
    }

    ligarTurbo(): void {
        this.turbo = true
    }

    desligarTurbo(): void {
        this.turbo = false
    }

    acelerar(): number {
        if (this.turbo) {
            super.acelerar();
            return super.acelerar();
        } else {
            return super.acelerar();
        }
    }
    //essa função faz com que, se tiver turbo ele acelera 2x, senao 1x
}



//aqui instanciamos o objeto da Hilux (resultado do molde)
//const meuCarro: Carro = new Hilux(); passando o tipo da variavel

let meuCarro = new Hilux();

meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();

console.log('Hilux: ', meuCarro.velocidade);

meuCarro = new Ferrari();
//para tratar meu carro como uma ferrari e ligar o turbo
(meuCarro as Ferrari).ligarTurbo();
meuCarro.acelerar();
meuCarro.acelerar();
meuCarro.acelerar();

console.log('Ferrari: ', meuCarro.velocidade);