var valorFabrica = Number(prompt('Insira o valor de fábrica do carro: '));

var distribuidor = valorFabrica * 0.12;
var imposto = valorFabrica * 0.45;
var totalCarro = valorFabrica + distribuidor + imposto;

console.log('O valor total é: R$ ' + totalCarro);