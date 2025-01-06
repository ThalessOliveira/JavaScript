//export deault -> ser acessivel fora do arquivo
//JSX - Sintaxe extendida do JavaScript
//JS + html e css

//Primeiro componente - Componente Funcional
export default function botao(props: any){
    return (
        //className -> classe css, como o bootstrap
        <button className="bg-green-500 p-2 rounded-md">
            {props.label ?? 'Ok'}
        </button>
    )
}