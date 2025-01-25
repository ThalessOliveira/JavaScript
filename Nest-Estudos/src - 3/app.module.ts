import { Module } from '@nestjs/common';
//import { AppController } from './app.controller'; REMOVIDO
//import { AppService } from './app.service'; REMOVIDO
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [ProdutoModule],
  controllers: [],
  providers: [],
})

//nest --help -> exibe comandos do nest
//nest g mo produto -> criando o modulo produto -> src/produto/produto.module.ts
export class AppModule {}
