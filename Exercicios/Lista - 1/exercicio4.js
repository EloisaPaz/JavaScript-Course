var p1 = prompt('Insira o peso 1: ');
var n1 = prompt('Insira a nota 1: ');
var p2 = prompt('Insira o peso 2: ');
var n2 = prompt('Insira a nota 2: ');
var p3 = prompt('Insira o peso 3: ');
var n3 = prompt('Insira a nota 3: ');

var soma = (parseFloat(n1 * p1) + parseFloat(n2 * p2) + parseFloat(n3 * p3));
var media = soma / (parseFloat(p1 + p2 + p3));

console.log('A média é: ' + media);