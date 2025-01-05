interface Animal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    //podemos definir que o tipo seja um conjunto especifico de valores
    domestico: boolean;
}

//herança de interface
//a interface pet vai ter todos os atributos de Animal + pet
interface Pet extends Animal {
    dono: string;
}

let cachorro: Pet = {
    nome: 'Rex',
    tipo: 'terrestre',
    domestico: true,
    dono: 'Thales',
};