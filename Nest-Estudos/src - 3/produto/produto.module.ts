import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';

//cd src/produto, criar controller no model produto
//criando controller -> nest g co --help mostra opções e detalhes, no caso ->nest g co produto --flat --no-spec

@Module({
  controllers: [ProdutoController]
})//@Module é um decorator, faz com que consiga aplicar funcionalidades no app ou classe
export class ProdutoModule {}
