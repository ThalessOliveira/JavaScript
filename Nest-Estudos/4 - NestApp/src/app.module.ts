import { MiddlewareConsumer, Module } from '@nestjs/common';
//import { AppController } from './app.controller'; REMOVIDO
//import { AppService } from './app.service'; REMOVIDO
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsuarioModule } from './usuario/usuario.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [ProdutoModule, ConfigModule.forRoot(), DbModule, UsuarioModule],
  controllers: [],
  providers: [],
})

//nest --help -> exibe comandos do nest
//nest g mo produto -> criando o modulo produto -> src/produto/produto.module.ts


export class AppModule { //dentro da classe criamos um método de configuração (middleware)
  configure(consumer:MiddlewareConsumer) { //configurando o Middleware consumer
    consumer.apply(LoggerMiddleware).forRoutes('*') //para aplicar o middleware (LoggerMiddleware) em todas as rotas da aplicação
  //consumer.apply(AdminMiddleware).forRoutes('/admin') // exemplo de um middleware de admin, para uma rota /admin

  //ou seja, nessa rota de admin, somente pessoas autenticadas como admin podem acessar a rota
  }
}
