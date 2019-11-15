var numPessoas = Number(prompt('Insira o número de pessoas: '));
var valorHora = Number(prompt('Insira o valor do quarto por hora: '));
var tempo = Number(prompt('Insira o tempo de permanência: '));
var desconto = Number(prompt('Insira o percentual de desconto: '));

var total = numPessoas * valorHora * tempo;
var totalDesconto = (total * desconto)/100;
total = total - totalDesconto;

console.log('O valor total é: R$ ' + total); 
