var salarioBase = prompt('Insira o salário base: ');

var gratificacao = parseFloat(salarioBase) * 0.05;
var imposto = parseFloat(salarioBase) * 0.07;

var salarioReceber = parseFloat(salarioBase) + gratificacao - imposto;

console.log('O salário a receber é: R$ ' + salarioReceber);