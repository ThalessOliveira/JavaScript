import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable() //injetável (injeção de dependência)
export class LoggerMiddleware implements NestMiddleware { //implementa o NestMiddleware
  use(req: Request, res: Response, next: () => void) { //recebe uma requisição, uma resposta e um método next
    console.log(`Request... ${req.url}`); //logar a url da requisição
    console.time('Duracao'); //calculo de duração

    next(); //chamar o proximo passo, se tudo estiver nas condições (aprovado pelo middleware)

    console.timeEnd('Duracao'); //finalizar a duração
  }
}//abra o console e veja os resultados

//app module -> registrar o middleware nas requisições da aplicação

//se precisar aplicar algo no middleware, pegue a requisição (req: Request), verificar as condições
//e dependendo do resultado, vai exibir uma resposta

