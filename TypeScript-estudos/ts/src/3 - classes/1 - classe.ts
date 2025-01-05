class Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string;
    ativo: boolean;

    //se eu quiser instanciar o objeto, preciso passar os valores com um construtor:

    constructor(){
        this.id = 212;
        this.nome = 'Thales';
        this.email = 'thales@gmail.com';
        this.ativo = true;
    }
    //utilizando 'this', para referenciar esta classe

}

const usuarioLogado: Usuario = new Usuario();
console.log(usuarioLogado);

//este foi um exemplo de construtor sem atributos

class Carro {
    marca: string;
    nome: string;
    ano: number;
    categoria?: string | null | undefined;

    constructor(marca: string, nome: string, ano: number, categoria: string = ''){
    //passamos categoria como vazio, já que não é obrigatório
        this.marca = marca;
        this.nome = nome;
        this.ano = ano;
        this.categoria = categoria;
    }

//aqui neste construtor passamos atributos, e na hora de instanciar o objeto dessa classe, precisamos passar os atributos como parametro
}

const carro01: Carro = new Carro('Toyota', 'Hilux', 2025);
console.log(carro01)