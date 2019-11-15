var nome = prompt('Insira o nome do professor: ');
var codigo = prompt('Insira o código: ');

switch(codigo){
    case 'd':
        console.log(nome + ' - Doutor');
    break;
        
    case 'm':
        console.log(nome + ' - Mestre');
    break;
        
    case 'e':
        console.log(nome + ' - Especialista');
    break;
        
    case 'l':
        console.log(nome + ' - Licenciado');
    break;
        
    case 'b':
        console.log(nome + ' - Bacharel');
    break;
        
    default:
        console.log('Código inválido!');
}//fecha switch