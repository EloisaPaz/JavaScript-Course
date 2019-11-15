var vPeso_Peixes = Number(prompt('Insira o peso de peixes: '));
var vExcesso_Peso = 0;
var vValor_Multa = 0;

if(vPeso_Peixes > 50){
    vExcesso_Peso = vPeso_Peixes - 50;
    vValor_Multa = vExcesso_Peso * 4;
    
    console.log('Peso de peixes: ' + vPeso_Peixes);
    console.log('Excesso de peso: ' + vExcesso_Peso);
    console.log('Valor da multa: ' + vValor_Multa);
}else{
    console.log('Peso de peixes: ' + vPeso_Peixes);
    console.log('Excesso de peso: ' + vExcesso_Peso);
    console.log('Valor da multa: ' + vValor_Multa);
}