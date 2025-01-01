//fazendo uma chamada de api

function fatosDoChuckNorris() {
    return fetch('https://api.chucknorris.io/jokes/random')
    //fetch = buscar
    //retorna uma promisse
    .then((response) => response.json())
    //quando achar uma resposta, chamar a função json, que é uma promise
    .then((data) => data.value);
    //quando o json estiver pronto, ele pega a propiedade value do json
}

//aqui vamos pegar 3 fatos do chuck norris com a função que criamos, ela retorna uma promise
const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();
//colocamos dentro das constante fato1, fato2, fato3


//Promise.all espera o resultado de todas as promise
Promise.all([fato1, fato2, fato3]).then(console.log);