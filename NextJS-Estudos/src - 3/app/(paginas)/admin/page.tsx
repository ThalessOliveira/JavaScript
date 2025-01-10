//vamos fazer um exemplo de middleware
//o middleware serve para proteger rotas, fazendo com que so usuarios com poder de acesso ou autenticados possam acessar a pagina
export default function PaginaAdmin(){
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-black">Administração</h1>
            <p>Esta é a página de administração.</p>
        </div>
    )
}

//middleware fica na pasta raiz do projeto
//em /src