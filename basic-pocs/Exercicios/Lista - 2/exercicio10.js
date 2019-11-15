var codigo = Number(prompt('Insira o código do lanche: '));
var quantidade = Number(prompt('Insira a quantidade: '));

var lanche;
var valor;
var total;

switch(codigo){
    case 1:
        lanche = 'Cachorro Quente';
        valor = 3.50;
        total = quantidade * valor;
        console.log('Código: ' + codigo);
        console.log('Descrição: ' + lanche);
        console.log('Total a pagar: R$ ' + total);
    break;
        
    case 2:
        lanche = 'X-Salada';
        valor = 4.00;
        total = quantidade * valor;
        console.log('Código: ' + codigo);
        console.log('Descrição: ' + lanche);
        console.log('Total a pagar: R$ ' + total);
    break;
        
    case 3:
        lanche = 'X-Bacon';
        valor = 4.50;
        total = quantidade * valor;
        console.log('Código: ' + codigo);
        console.log('Descrição: ' + lanche);
        console.log('Total a pagar: R$ ' + total);
    break;
        
    case 4:
        lanche = 'Torrada Simples';
        valor = 3.20;
        total = quantidade * valor;
        console.log('Código: ' + codigo);
        console.log('Descrição: ' + lanche);
        console.log('Total a pagar: R$ ' + total);
    break;
        
    case 5:
        lanche = 'Refrigerante';
        valor = 2.20;
        total = quantidade * valor;
        console.log('Código: ' + codigo);
        console.log('Descrição: ' + lanche);
        console.log('Total a pagar: R$ ' + total);
    break;
}//fecha switch





