import { Controller, Get } from '@nestjs/common';

//controller controla o fluxo (regras de negócio)
@Controller('produtos')//url: /produtos
export class ProdutoController {

    //criando uma função que recebe uma requisição e responde se o serviço está funcionando
    @Get('ping')//url: /ping
    //@Get significa que vai passar /ping na url, por GET
    ping(): string{
        return 'Pong';
    };
    //instalar extensão Rest Client -> criar produto.http
    //Colocar o metodo e a url, facilmente consegue fazer a requisição
}
