//importancia do uso do else, e não só if

//usando else, a execução do algoritimo vai parar quando encontrar uma condição true

//diferentemente de usar varios if, o codigo continuara em execução procurando condições no if

//isso economiza processamento

let statusUsuario = 'inativo';

if (statusUsuario === 'ativo'){
    console.log('Bem-vindo de volta! Acesso permitido');
} else if (statusUsuario === 'inativo'){
    console.log('Sua conta está inativa. Entre em contato com o suporte');
} else if (statusUsuario === 'banido'){
    console.log('Você está BANIDO!!!');
} else if (statusUsuario === 'pendente'){
    console.log('Sua conta ainda não foi verificada, cheque o email para verificar');
}