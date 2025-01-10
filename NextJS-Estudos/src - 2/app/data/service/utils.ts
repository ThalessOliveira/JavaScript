async function esperar(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
} //função que vai fazer com que espere uma quantidade de milissegundos

export { esperar }