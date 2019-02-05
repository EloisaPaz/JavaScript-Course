var num1 = Number(prompt('Insira o primeiro número: '));
var num2 = Number(prompt('Insira o segundo número: '));
var op = Number(prompt('Escolha a operação: '));

switch(op){
    case 1:
        var media = (num1 + num2)/2;
        console.log('A média é: ' + media);
    break;
        
    case 2:
        var diferenca = num1 - num2;
        console.log('A diferença é: ' + diferenca);
    break;
        
    case 3:
        var produto = num1 * num2;
        console.log('O produto é: ' + produto);
    break;
        
    case 4:
        var divisao = num1 / num2;
        console.log('A divisão é: ' + divisao);
    break;
        
    default:
        console.log('Digite uma opção válida!');
}//fecha switch