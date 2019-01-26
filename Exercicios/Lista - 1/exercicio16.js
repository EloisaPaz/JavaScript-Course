var numFuncionario = prompt('Insira o número do funcionário: ');
var numHoras = prompt('Insira o número de horas trabalhadas: ');
var valorHora = prompt('Insira o valor recebido por hora: ');
var numFilhos = prompt('Insira o número de filhos com idade menor que 14 anos: ');
var salarioFamilia = prompt('Insira o valor do salário família: ');

var salarioTotal = (parseInt(numHoras) * parseFloat(valorHora)) + (parseInt(numFilhos) * parseFloat(salarioFamilia));

console.log('Número do funcionário: ' + numFuncionario);
console.log('Salário: ' + salarioTotal);