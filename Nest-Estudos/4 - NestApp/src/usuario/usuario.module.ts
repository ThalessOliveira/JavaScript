//criando modulo de usuario (nest g mo usuario)
//criando controller para o usuario (nest g co usuario --flat --no-spec)

import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DbModule } from 'src/db/db.module';

//o modulo de usuario precisa usar o cache provider

@Module({
  imports: [DbModule],//importando o modulo do banco de dados
  controllers: [UsuarioController]
})
export class UsuarioModule {}
