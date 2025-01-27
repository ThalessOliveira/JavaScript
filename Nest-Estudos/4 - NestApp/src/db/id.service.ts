//nest g s id --flat --no-spec
//criando service para gerar id

import { Injectable } from '@nestjs/common';
import { CacheProvider } from './cache.provider';

@Injectable()
export class IdService { //gerando um id pelo cache provider
    constructor(private readonly cache: CacheProvider){} //injetando o cache provider

    async gerarID(): Promise<number>{
        const id = await this.cache.obter('id')//obtem apenas o ultimo pela chave id
        const novoId = id ? +id + 1 : 1; //se o id existe, soma 1, senao id = 1
        await this.cache.salvar('id', novoId); //pega o valor do novo id e salva
        return +novoId; //retorna o novo id
    }
}
