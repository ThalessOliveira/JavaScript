//asynnc await e uma forma de facilitar trabalhar de forma assíncrona para quem esta acostumado com a forma síncrona


async function fatosDoChuckNorris() {
    //criamos uma função async
    const resp = await fetch('https://api.chucknorris.io/jokes/random');
    //await -> espera a resposta para ir para próxima linha
    const data = await resp.json();
    return data.value;
}


const fato1 = fatosDoChuckNorris();
const fato2 = fatosDoChuckNorris();
const fato3 = fatosDoChuckNorris();

Promise.all([fato1, fato2, fato3]).then(console.log);