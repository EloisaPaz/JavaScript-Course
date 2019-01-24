var imcMark, imcJohn;
var pesoMark, pesoJohn;
var alturaMark, alturaJohn;

pesoMark = prompt('Insira o peso de Mark: ');
alturaMark = prompt('Insira a altura de Mark: ');

pesoJohn = prompt('Insira o peso de John: ');
alturaJohn = prompt('Insira a altura de John: ');

imcMark = pesoMark / (alturaMark * alturaMark);
imcJohn = pesoJohn / (alturaJohn * alturaJohn);

console.log(imcMark);
console.log(imcJohn);

if(imcMark > imcJohn){
    console.log('O IMC de Mark é maior que o IMC de John.');
}else{
    console.log('O IMC de John é maior que o IMC de Mark.');
}