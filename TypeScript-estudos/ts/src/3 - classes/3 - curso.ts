class Curso {
    constructor(
        readonly id: number,
        public nome: string,
        public duracaoEmSegundos: number
    ){}
//passando modificadores de acesso no construtor, conseguimos ter nossos atriutos e acessá-los


//funcao para calcular a duracao em horas e minutos
    duracaoemHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600));
        return `${horas}h ${minutos}m`;
    //Math.floor arredonda o numero para inteiro, 5.35 -> 5
    }
}

const curso = new Curso(1, 'Typescript', 76243);
console.log(curso);
console.log(curso.nome);
console.log(curso.duracaoemHM());