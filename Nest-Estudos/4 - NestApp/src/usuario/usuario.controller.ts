import { Body, Controller, Get, Post } from '@nestjs/common';
import { CacheProvider } from 'src/db/cache.provider';
import { Usuario } from './usuario.entity';
import { IdService } from 'src/db/id.service';

@Controller('usuarios')//trocando de (usuario) para (usuarios)
export class UsuarioController {

    //injetando o CacheProvider e IdService no construtor da classe do UsuarioController (injeção de dependencia)
    constructor(
        private readonly cache: CacheProvider,
        private readonly idService: IdService
    ){}//passa para dentro do controller uma instância pronta para utilizar
       // as funções de salvar, obter...

        //vamos utilizar as funções injetadas do CacheProvider

        //função para obter todos

        @Get()
        async obterTodos(){
            return this.cache.obterTodos('usuario');
        }

        //função para salvar usuario
        @Post()
        async salvar(@Body() usuario: Usuario): Promise<void> { //recebe um usuario no body na requisição
            const id = await this.idService.gerarID();
            return this.cache.salvarPorId('usuario', id, {
                ...usuario,
                 id, //garante que todos os usuario tenham um novo id (idService)
            } ); //salvar no cache
        }
    
    
}
