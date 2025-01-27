import { Module } from '@nestjs/common';
//import { AppController } from './app.controller'; REMOVIDO
//import { AppService } from './app.service'; REMOVIDO
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [ProdutoModule, ConfigModule.forRoot(), DbModule, UsuarioModule],
  controllers: [],
  providers: [],
})

//nest --help -> exibe comandos do nest
//nest g mo produto -> criando o modulo produto -> src/produto/produto.module.ts
export class AppModule {}
