import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import produtos from 'src/constantes/produtos';
  import Produto from './produto.entity';

//controller controla o fluxo (regras de negócio)
@Controller('produtos')//url: /produtos
export class ProdutoController {

    //criando uma função que recebe uma requisição e responde se o serviço está funcionando
    @Get('ping')//url: /ping
    //@Get significa que vai passar /ping na url, por GET
    ping(): string{
        return 'Pong';
    };
    //instalar extensão Rest Client -> criar produto.http
    //Colocar o metodo e a url, facilmente consegue fazer a requisição


    //criando api rest para retornar os produtos
    //ela vai responder a requisição com os produtos em constantes/produtos.ts

    @Get()               //lista de produtos []
    async obterProdutos(): Promise<Produto[]> {
        return produtos;
    };

    //pegando produto por id     @Param diz que vai pegar o parametro da URL
    @Get(':id')                         //unico produto
    async obterProdutoPorID(@Param('id') id: string): Promise<Produto>{
        const produto = produtos.find((produto) => produto.id === +id);

        if (!produto) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }

        return produto;

        //+id converte string para number
    }

    //criando novo produto  
    @Post()//passar por post
    //passando pelo body
    async criar(@Body() produto: Produto): Promise<void> {
      produtos.push({  //adicionando -> .push
        ...produto,
        id: produto.id ? produto.id : produtos.length + 1, //adicionando id
      });
    }

    //criando função com o metodo http patch, para atualizar
    @Patch()
                    //recebendo uma parte do produto
    async atualizar(@Body() produto: Partial<Produto>): Promise<void>{
                  //pegando indice do produto
      const index = produtos.findIndex((p) => p.id === Number(produto.id));//achando  produto
      produtos[index] = { ...produtos[index], ...produto};//vai substituir o produto index, pelo produto atual(produto + produto atual)
    }

    //com isso temos 3 serviços na mesma url, se chamarmos /produtos @get, vai obter o produto, @post vai criar e @patch atualizar, por assim vai
    //vamos criar mais um, DELETE, para deletar
    @Delete(':id')
    async excluir(@Param('id')id: string): Promise<void> {
      const index = produtos.findIndex((p) => p.id === +id); //pegando o indice do produto
      produtos.splice(index, 1); //produtos.splice exclui o produto de dentro do array
    }
}
