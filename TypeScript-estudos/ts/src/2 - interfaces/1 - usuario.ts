//interfaces definem a estrutura de um objeto, fazendo com que ele tenha propiedades e tipos específicos

interface Usuario {
    id: number | string;
    nome: string;
    email: string;
    senha?: string; //? faz com que seja opcional, possa existir ou seja undefined
    ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'Thales',
    email: 'thales@email.com',
    ativo: true,    
}

console.log(usuario.email);

//interfaces são o mesmo que um objeto literal, porém ajudam a trazer uma estrutura para o objeto
