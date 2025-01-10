import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest){

    const {origin} = request.nextUrl //faz uma requisição para a url de origem (requisição no header)
    const cookieStore = cookies() //pega os cookies do browser (autenticação por exemplo)
    const token = cookieStore.get('meu-cookie') //vai pegar o token no cookie

    if (!token){ //se tiver um token -> continua (lembrando que essa verificação não checa se o token é válido)
        return NextResponse.redirect(new URL(origin)) //se não tiver token, ele volta para a url de origem
    }
    return NextResponse.next() //se tiver ele segue o fluxo
}

export const config = {
    matcher: '/admin/:path*', //aplicando na url /admin/...
}
//se não tiver coookie 'meu-cookie' no browser, nem na pagina ele vai entrar

//inspencionar -> aplicativo -> vá nos cookies do aplicativo -> botão direito, add new
//coloque o nome meu-cookie e qualquer coisa de valor
//agora você consegue acessar a pagina
//esse e um exemplo basico de middleware