var A = Number(prompt('Insira o valor de A: '));
var B = Number(prompt('Insira o valor de B: '));
var C = Number(prompt('Insira o valor de C: '));
var D = Number(prompt('Insira o valor de D: '));

if(B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 == 0){
    console.log('Valores aceitos!');
}else{
    console.log('Valores não aceitos!');
}