var quantidadeTipo1 = prompt('Insira a quantidade de peças do tipo 1: ');
var valorTipo1 = prompt('Insira o valor de cada peça do tipo 1: ');
var quantidadeTipo2 = prompt('Insira a quantidade de peças do tipo 2: ');
var valorTipo2 = prompt('Insira o valor de cada peça do tipo 2: ');

var valorTotal1 = parseFloat(valorTipo1) * parseFloat(quantidadeTipo1);
var valorTotal2 = parseFloat(valorTipo2) * parseFloat(quantidadeTipo2);
var valorTotalGeral = parseFloat(valorTotal1) + parseFloat(valorTotal2);

console.log('Valor das compras Tipo 1: R$' + valorTotal1);
console.log('Valor das compras Tipo 2: R$' + valorTotal2);
console.log('Valor total das compras: R$' + valorTotalGeral);