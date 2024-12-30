const pessoas = [
    {nome: "Thales", idade: 18, nota1: 950, nota2: 900 },
    {nome: "Alex", idade: 19, nota1: 600, nota2: 650},
    {nome: "Gabriel", idade: 17, nota1: 860, nota2: 900}
];

let media = 0;

console.log(`${pessoas.length} pessoas cadastradas.`);

for (let i = 0; i < pessoas.length; i++){
    let nota1 = pessoas[i].nota1;
    let nota2 = pessoas[i].nota2;

    media = (nota1 + nota2) / 2;
    if (media > 700){
        console.log(`${pessoas[i].nome} aprovado!`)
    } else {
        console.log(`${pessoas[i].nome} reprovado!`)
    }
}