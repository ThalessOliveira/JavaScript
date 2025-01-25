import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});//{cors: true} permite requisições de origens diferentes, FAZ DIFERENÇA NA APLICAÇÃO
  await app.listen(process.env.PORT ?? 4000);
  //quando se trabalha em uma aplicação front-end e back-end
  //A aplicação (se for nextJs) vai ter a mesma porta da backend (3000)
  //Alterando a porta para 4000

  //removendo: app.cotroller.spec.ts, app.service.ts, app.controller.ts
}
bootstrap();
