let amigos = [
    {nome: "Thales", dinheiro: true, disponivel: false},
    {nome: "Guilherme", dinheiro: false, disponivel: true},
    {nome: "Erick", dinheiro: true, disponivel: true},
    {nome: "Nicolas", dinheiro: true, disponivel: true}
]

let pescaria = true;
let tempo = "ensolarado";

if (tempo = "ensolarado"){
    for (let i = 0; i < amigos.length; i++){
        if(amigos[i].dinheiro && amigos[i].disponivel){
            console.log(`${amigos[i].nome} disponível.`)
        } else {
            console.log(`${amigos[i].nome} indisponível`)
            pescaria = false;
        }
    }    
} else {
    console.log("Não vamos pescar!")
}

if (!pescaria){
    console.log("Não vamos pescar!")
} else {
    console.log("VAMOS vamos pescar!")
}
