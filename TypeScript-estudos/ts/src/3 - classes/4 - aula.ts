//utilizando interface e class

interface PropiedadesAula {
    id:number;
    nome: string;
    duracaoEmSegundos: number;
}

class Aula {
    constructor(readonly props: PropiedadesAula) {}
    //props -> propiedades
    //ao inves de exigir os atributos, podemos passar a interface do construor do objeto

    get id(): number{
        return this.props.id;
    }
    //métodos para acessar atributos

    get nome(): string {
        return this.props.nome;
    }
    //
    get duracaoEmSegundos(): number {
        return this.props.duracaoEmSegundos
    }
    //

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);
        const minutos = Math.floor((this.duracaoEmSegundos % 3600));
        return `${horas}h ${minutos}m`
    }
}

const aula = new Aula({
    id: 1,
    nome: 'Introdução ao TypeScript',
    duracaoEmSegundos: 6000,
});

console.log(aula.nome);
console.log(aula.duracaoEmHM());