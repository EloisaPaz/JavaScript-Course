var quantidadeHoras = Number(prompt('Insira a quantidade de horas trabalhadas: '));

var valorHora = Number(prompt('Insira o valor da hora trabalhada: '));

var salarioBruto = quantidadeHoras * valorHora; 

var INSS = salarioBruto * 0.11; 

var salarioLiquido = salarioBruto - INSS; 

console.log('Salário Bruto: ' + salarioBruto);
console.log('Salário Líquido: ' + salarioLiquido);
