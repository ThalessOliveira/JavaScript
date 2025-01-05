class Cliente {
    constructor(
        private readonly _nome: string,
        private readonly numero: number,
        private readonly email: string,
        private readonly ativo: boolean,
        private readonly saldo: number,

    ){}

    //fazendo dessa forma, mesmo estando declarado '_nome' como private, vamos conseguir acessar de fora da classe
    get nome(): string {
        return this._nome
    }
    //colocamos um _ (underline) na frente do atributo no construtor
}


const cliente: Cliente = new Cliente('Thales', 1799753678, 'thales@thales.com', true, 613
)

console.log(cliente.nome)