export default function Layout(props: any){
    return(
                <div className="flex flex-col border-8 border-purple-500 p-8 w-full h-full">{props.children}</div>
    )
}
//esse é um layout para a pagina filha para dentro
//é uma forma hierarquica para templates e layots