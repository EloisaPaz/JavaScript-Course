var num1 = Number(prompt('Insira o primeiro número: '));
var num2 = Number(prompt('Insira o segundo número: '));
var num3 = Number(prompt('Insira o terceiro número: '));
var num4 = Number(prompt('Insira o quarto número: '));

var quadrado1 = Math.pow(num1, 2);
var quadrado2 = Math.pow(num2, 2);
var quadrado3 = Math.pow(num3, 2);
var quadrado4 = Math.pow(num4, 2);

if(quadrado3 >= 500){
    console.log(quadrado3);
}else{
    console.log(num1 + ' ' + quadrado1);
    console.log(num2 + ' ' + quadrado2);
    console.log(num3 + ' ' + quadrado3);
    console.log(num4 + ' ' + quadrado4);
}