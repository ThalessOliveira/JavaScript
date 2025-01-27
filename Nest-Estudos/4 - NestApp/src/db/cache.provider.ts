//Provider -> provedor do banco de dados em memória

import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

//Modulo = Representação do banco de dados

@Injectable() //pode ser injetavel (injeção de dependências)
export class CacheProvider implements OnModuleDestroy{ //classe cache, modulo do node
    private readonly db: Redis;

    constructor(){ //toda classe precisa de construtores
        this.db = new Redis({ //instanciando nosso banco de dados (conexão do banco)
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT), //Ou +process.env.REDIS_PORT, passando para o tipo Number
        })
    }//quando instanciar o redis, abre uma conexão com o banco

    onModuleDestroy() { //quando o modulo for destruido, desconecta do banco
        this.db.disconnect();
    }


    //função para salvar os registros por id
    async salvarPorId(tipo: string, id: number, valor:any): Promise<void>{
        await this.db.set(`${tipo}:${id}`, JSON.stringify(valor)); //salva os dados
        await this.atualizarIds(tipo, id); //e atualiza os ids
    }

    //função para salvar os registros no banco em memória
    async salvar(chave: string, valor: any): Promise<void> {
        await this.db.set(chave, JSON.stringify(valor));
      }

    //obtem os dados por id
    async obterPorId(tipo: string, id: number): Promise<any> {
        const valor = await this.db.get(`${tipo}:${id}`); //pega o tipo e id

        if (valor === null) {
            throw new Error(`Nenhum dado encontrado para o tipo "${tipo}" e id "${id}".`); //se o valor for nulo retorna erro
        }

        return JSON.parse(valor); //retorna o valor
    }

    //obter os dados pela chave, retorna o valor 
    async obter(chave: string): Promise<any> {
        const valor = await this.db.get(chave); // tenta buscar a chave
        return valor ? JSON.parse(valor) : null; // retorna null se a chave não existir
    }

    //obtem a lista de ids armazenados para um determinado tipo
    async obterTodos(tipo: string): Promise<any[]> {
        const ids = await this.db.get(tipo); // tenta buscar os IDs associados ao tipo
        const idsArray = ids ? JSON.parse(ids) : []; // converte os IDs para array, ou vazio se não existir
    
        if (idsArray.length === 0) {
            return []; // se não houver IDs, retorna um array vazio
        }
    
        const valores = await Promise.all(
            idsArray
                .filter((id: number) => id !== null && id !== undefined) // garante que nenhum ID inválido seja usado
                .map(async (id: number) => {
                    const valor = await this.obterPorId(tipo, id);
                    return valor;
                }),
        );
    
        return valores; // retorna os valores associados aos IDs válidos
    }

    //função para atualizar id's quando salvar um novo elemento no cache
                            //tipo = nome da classe
    private async atualizarIds(tipo: string, id: number): Promise<void>{
        const ids = await this.db.get(tipo);//pega a chave do tipo (produto, usuario...) e trás os ids

        const idsArray = ids ? JSON.parse(ids) : [];//converte os ids para um array de inteiros
        if(idsArray.includes(id)) return;//verifica se o id está incluso, se tiver, não atualiza

        idsArray.push(+id);//se não ele adiciona o id
        idsArray.sort();//ordena o array
        await this.db.set(tipo, JSON.stringify(idsArray));//e salva o registro com os ids atualizados
    }
}

//Retorna Promise, use await
