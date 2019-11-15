var nome = prompt('Insira o nome do vendedor: ');
var numCarros = Number(prompt('Insira o número de carros vendidos: '));
var totalVendas = Number(prompt('Insira o valor total das vendas: '));

var comissao = totalVendas * 0.05; 
var salario = 500 + (numCarros * 50) + comissao; 

console.log('O sálario de ' + nome + ' é: ' + salario);