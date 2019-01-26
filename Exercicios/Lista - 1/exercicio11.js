var salario = prompt('Insira o salário atual: R$ ');
var aumento = prompt('Insira o percentual de aumento: % ');
    
aumento = (parseFloat(salario) * parseFloat(aumento))/ 100;

var salarioNovo = parseFloat(salario) + parseFloat(aumento);

console.log(salario, aumento, salarioNovo);