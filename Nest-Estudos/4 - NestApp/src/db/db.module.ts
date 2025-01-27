//criando novo module para o DataBase (nest g mo db)
//criando um provider cache (cd src/db)(nest g pr cache --flat --no-spec)
import { Module } from '@nestjs/common';
import { CacheProvider } from './cache.provider';
import { IdService } from './id.service';

@Module({
  providers: [CacheProvider, IdService],
  exports: [CacheProvider, IdService], //exportar cache, IdService,  pois queremos acessar o cache fora desse módulo
})
export class DbModule {}
