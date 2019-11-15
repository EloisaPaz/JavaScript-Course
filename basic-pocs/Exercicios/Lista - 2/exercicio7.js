var nome = prompt('Insira o nome do funcionário: ');
var salarioBruto = Number(prompt('Insira o salário bruto: '));

if(salarioBruto <= 1050.00){
    console.log(nome);
    console.log('Salário bruto: R$ ' + salarioBruto + ' não sofre desconto de IRRF');
}else if(salarioBruto > 1050.00 && salarioBruto <= 2400.00){
    var excedente = salarioBruto - 1050.00;
    var desconto = excedente * 0.15;
    var salarioLiquido = salarioBruto - desconto; 
    console.log(nome);
    console.log('Salário bruto: R$ ' + salarioBruto);
    console.log('Salário líquido: R$ ' + salarioLiquido);
    console.log('Desconto: R$ ' + desconto);
}else if(salarioBruto > 2400.00){
    var excedente = salarioBruto - 2400.00;
    var desconto = excedente * 0.28;
    var salarioLiquido = salarioBruto - desconto;
    console.log(nome);
    console.log('Salário bruto: R$ ' + salarioBruto);
    console.log('Salário líquido: R$ ' + salarioLiquido);
    console.log('Desconto: R$ ' + desconto);
}