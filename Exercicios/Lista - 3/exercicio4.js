var codigo = Number(prompt('Insira o código do produto: '));
var quantidade = Number(prompt('Insira a quantidade do produto: '));

switch(codigo){
    case 100:
        var valor = 1.70;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
        
    case 101:
        var valor = 2.30;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
        
    case 102:
        var valor = 2.60;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
        
    case 103:
        var valor = 2.40;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
        
    case 104:
        var valor = 2.50;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
        
    case 105:
        var valor = 1.00;
        var totalPagar = quantidade * valor;
        console.log('Total a pagar: R$ ' + totalPagar);
    break;
}//fecha switch



